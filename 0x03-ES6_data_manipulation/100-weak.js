export const weakMap = new WeakMap();
export function queryAPI(endPoint) {
  const count = weakMap.get(endPoint) || 0;
  weakMap.set(endPoint, count + 1);
  if (weakMap.get(endPoint) >= 5) throw new Error('Endpoint load is high');
  return count;
}
