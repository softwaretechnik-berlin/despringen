# Despringen

A simple debounce library in typescript.

## Example

```typescript
const f = debounce((i: number) => (used = i), 50);

f(1);
f(2);
f(3);
// 3
```
