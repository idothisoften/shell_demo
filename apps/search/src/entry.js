export const load = () => {
    return import(/* webpackChunkName: "app" */ './app');
};

export const name = 'search';

export const url = /^\/search\//;
