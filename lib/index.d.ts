export declare function debounce<F extends (...args: any) => void>(f: F, ms?: number): (...args: Parameters<F>) => void;
export declare type PromiseReturnType<F extends (...args: any) => any | Promise<any>> = ReturnType<F> extends Promise<infer T> ? Promise<T> : Promise<ReturnType<F>>;
export declare function debounceAsync<F extends (...args: any) => any | Promise<any>>(f: F, ms?: number): (...args: Parameters<F>) => PromiseReturnType<F>;
