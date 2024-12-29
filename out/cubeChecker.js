"use strict";
//https://www.codewars.com/kata/58d248c7012397a81800005c/train/typescript
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
//# sourceMappingURL=cubeChecker.js.map