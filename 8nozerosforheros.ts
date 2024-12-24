export function noBoringZeros(n: number): number {
    const nReversed = n.toString().split("").reverse().join("");
    console.log(nReversed);
    return n;
}