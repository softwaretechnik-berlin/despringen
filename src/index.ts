const defaultMs = 300;

export function debounce<F extends (...args: any) => void>(
  f: F,
  ms = defaultMs
): (...args: Parameters<F>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined = undefined;

  return (...args: Parameters<F>): void => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      f(...args);
    }, ms) as any;
  };
}

type Executor<T> = {
  resolve: (value?: T | Promise<T>) => void;
  reject: (err: any) => void;
};

export type PromiseReturnType<
  F extends (...args: any) => any | Promise<any>
> = ReturnType<F> extends Promise<infer T>
  ? Promise<T>
  : Promise<ReturnType<F>>;

export function debounceAsync<F extends (...args: any) => any | Promise<any>>(
  f: F,
  ms = defaultMs
): (...args: Parameters<F>) => PromiseReturnType<F> {
  const unresolved: Executor<ReturnType<F>>[] = [];

  const debounced = debounce((...args: Parameters<F>) => {
    try {
      const result = f(...args);
      unresolved.forEach((executor) => executor.resolve(result));
    } catch (e) {
      unresolved.forEach((executor) => executor.reject(e));
    }
    // empty the array
    unresolved.length = 0;
  }, ms);

  return ((...args: Parameters<F>) => {
    return new Promise((resolve, reject) => {
      unresolved.push({ resolve, reject });
      debounced(...args);
    });
  }) as (...args: Parameters<F>) => PromiseReturnType<F>;
}
