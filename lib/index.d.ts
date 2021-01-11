export default function debounce<F extends (...args: any) => void>(f: F, ms?: number): (...args: Parameters<F>) => void;
