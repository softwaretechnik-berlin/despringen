export type F<T extends any[]> = (...args: T) => void;

export default function debounce<T extends any[]>(f: F<T>, ms = 300): F<T> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined = undefined;

  return (...args) => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      f(...args);
    }, ms) as any;
  };
}
