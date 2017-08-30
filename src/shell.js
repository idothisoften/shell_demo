import * as searchModule from '../apps/search';
import * as bookingModule from '../apps/booking';

const modules = [searchModule, bookingModule];

const loaders = new Map(
    modules.map(({name, load}) => [
        name,
        {load, state: 'initial', promise: null, module: null}
    ])
);

const host = {
    load(name) {
        const obj = loaders.get(name);
        if (obj == null) { return Promise.resolve(null); }
        if (obj.state === 'loading') { return obj.promise; }
        if (obj.state === 'loaded') { return Promise.resolve(obj.module); }

        const promise = obj.load();
        loaders.set(
            name,
            {
                ...obj,
                state: 'loading',
                promise,
                module: null
            }
        );

        promise.then(
            (module) => {
                loaders.set(
                    name,
                    {
                        ...obj,
                        state: 'loaded',
                        promise: null,
                        module
                    }
                );
                return module;
            }
        );

        return promise;
    },
    navigate(path) {
        window.history.pushState({}, 'nav', path);
        processLocation(path);
    }
};

let currentModule = null;
const processLocation = (path) => {
    const module = modules.find(({url}) => url.test(path));

    if (module == null) { return; }

    host.load(module.name).then(
        (loaded) => {
            if (loaded == null) { return; }
            if (currentModule != null) {
                currentModule.destroy();
            }
            loaded.init(host);
            currentModule = loaded;
        }
    );
};

window.onpopstate = () => {
    processLocation(document.location.pathname);
};

processLocation(document.location.pathname);
