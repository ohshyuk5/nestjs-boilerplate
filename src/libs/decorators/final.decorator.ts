export function Final<T extends { new (...args: any[]): object }>(
  target: T,
): T {
  return class Final extends target {
    constructor(...args: any[]) {
      if (new.target !== Final) {
        throw new Error(`Cannot extend a final class "${target.name}"`);
      }
      super(...args);
    }
  };
}
