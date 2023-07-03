export default function createInt8TypedArray(length, position, value) {
  if (length <= position) {
    throw new Error('Position outside range');
  }
  const array = new Int8Array(new ArrayBuffer(length));
  array[position] = value;
  return array;
}
