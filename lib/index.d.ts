export declare function debounce<F extends (...args: any) => void>(f: F, ms?: number): (...args: Parameters<F>) => void;
export declare function debounceAsync<F extends (...args: any) => any>(f: F, ms?: number): (...args: Parameters<F>) => Promise<ReturnType<F>>;
