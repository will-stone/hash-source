"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getHashPath = () => {
    const href = window.location.href;
    const hashIndex = href.indexOf('#');
    return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};
const pushHashPath = (path) => (window.location.hash = path);
const replaceHashPath = (path) => {
    const hashIndex = window.location.href.indexOf('#');
    window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};
const getState = (path) => {
    const pathname = path ? path : getHashPath();
    return { pathname, search: '' };
};
const resolveInitialState = (state) => {
    if (state.pathname === '') {
        replaceHashPath('/');
    }
};
const createHashSource = () => {
    let state = getState();
    resolveInitialState(state);
    return {
        get location() {
            return getState();
        },
        addEventListener(name, fn) {
            window.addEventListener(name, fn);
        },
        removeEventListener(name, fn) {
            window.removeEventListener(name, fn);
        },
        history: {
            state,
            pushState(stateObj, _, uri) {
                state = getState(uri);
                pushHashPath(uri);
            },
            replaceState(stateObj, _, uri) {
                state = getState(uri);
                replaceHashPath(uri);
            },
        },
    };
};
exports.default = createHashSource;
