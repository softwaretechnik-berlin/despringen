export declare type F<T extends any[]> = (...args: T) => void;
export default function debounce<T extends any[]>(f: F<T>, ms?: number): F<T>;
