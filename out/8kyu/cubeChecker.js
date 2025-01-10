"use strict";
//TODO https://www.codewars.com/kata/58d248c7012397a81800005c/train/typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.cubeChecker = cubeChecker;
function cubeChecker(volume, side) {
    if (volume === 0 || side === 0) {
        return false;
    }
    else {
        return side ** 3 === volume;
    }
}
//? Top Solution
//* export function cubeChecker(volume: number, side: number): boolean {
//*     return volume > 0 ? volume === side ** 3 : false;
//*   }
//! cleans into ternary, less code less readable doesn't account for side = 0
//# sourceMappingURL=cubeChecker.js.map