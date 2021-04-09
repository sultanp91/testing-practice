export default function capitaliseString(str) {
  const arr = str.toLowerCase().split('');
  arr[0] = arr[0].toUpperCase();
  return arr.join('');
}
