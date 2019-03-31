declare const createHashSource: () => {
    readonly location: {
        pathname: string;
        search: string;
    };
    addEventListener(name: any, fn: (this: Window, ev: any) => any): void;
    removeEventListener(name: any, fn: (this: Window, ev: any) => any): void;
    history: {
        state: {
            pathname: string;
            search: string;
        };
        pushState(stateObj: any, _: any, uri: string): void;
        replaceState(stateObj: any, _: any, uri: string): void;
    };
};
export default createHashSource;
