/**
 * 从对象中提取指定的属性
 * @param obj
 * @param keys
 * @returns {Pick<T, TKeys>}
 */
export const pick = <T extends object, TKeys extends keyof T>(
  obj: T,
  keys: TKeys[],
): Pick<T, TKeys> => {
  if (!obj) return {} as Pick<T, TKeys>;
  return keys.reduce(
    (acc, key) => {
      if (Object.prototype.hasOwnProperty.call(obj, key)) acc[key] = obj[key];
      return acc;
    },
    {} as Pick<T, TKeys>,
  );
};
