export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position > length) throw new Error('Position outside range');

  const arr = new Int8Array(length);
  arr[position] = value;

  return new DataView(arr.buffer);
}
