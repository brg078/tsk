"use strict";
//https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.noBoringZeros = noBoringZeros;
function noBoringZeros(n) {
    //console.log('noBoringZeros n: ',n)
    let nReverse = Number(Math.abs(n).toString().split("").reverse().join(""));
    console.log('nReverse as a Number: ', nReverse);
    let nForward = Number(nReverse.toString().split("").reverse().join(""));
    console.log('nForward as a Number: ', nForward);
    return n > 0 ? nForward : -(nForward);
}
//# sourceMappingURL=8nozerosforheros.js.map