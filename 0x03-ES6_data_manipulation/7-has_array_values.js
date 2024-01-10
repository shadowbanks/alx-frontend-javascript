export default function hasValuesFromArray(set, arr) {
  for (let x of arr) {
    if (!set.has(x)) return false;
  }
  return true;
}
