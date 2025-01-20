"use strict";
//TODO hhttps://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.centuryFromYear = void 0;
const centuryFromYear = (year) => {
    return (year % 100) ? Math.floor(year / 100) + 1 : year / 100;
};
exports.centuryFromYear = centuryFromYear;
//? Top Solution
// export const centuryFromYear = (year: number): number => {
//     return Math.ceil(year / 100);
//   };
//*export function
//!critique I skipped the ciel functionality which could have leaned my code out more
//# sourceMappingURL=centuryFromYear.js.map