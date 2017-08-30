export const load = () => {
    return import(/* webpackChunkName: "app" */ './app');
};

export const name = 'booking';

export const url = /^\/booking\//;
