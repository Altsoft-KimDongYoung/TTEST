export const isUndefinedTypeGuard = <T>(value: T | undefined): T => {
  if (value === undefined) {
    throw new Error(`${value} is undefined`);
  }
  return value;
};
