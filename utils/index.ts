export const isServer = !process.browser;

export const isObject = <T>(obj: T): boolean =>
  obj && typeof obj === 'object' && !Array.isArray(obj);

export const ensureArray = <T>(data: T): T | [] =>
  Array.isArray(data) ? data : [];

export const ensureObject = <T, P>(
  obj: T,
  defaultValue?: P,
): { [X in keyof T]?: any } | undefined =>
  isObject(obj) ? obj : isObject(defaultValue) ? defaultValue : {};

export const ensureObject2 = <T, P>(
  obj: T,
  defaultValue?: P,
): { [P in keyof T]?: any } | undefined =>
  isObject(obj) ? obj : isObject(defaultValue) ? defaultValue : {};
