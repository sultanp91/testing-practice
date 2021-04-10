export default function analyse(arr) {
    const average = arr.reduce((a,b) => a + b, 0) / arr.length;
    const min = arr.sort((a,b) => a - b)[0];
    const max = arr.sort((a,b) => b - a)[0];
    const length = arr.length

    return {average, min, max, length}
}