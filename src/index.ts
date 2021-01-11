export default function debounce<F extends (...args: any) => void>(
  f: F,
  ms = 300
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
