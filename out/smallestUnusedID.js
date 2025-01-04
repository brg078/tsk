"use strict";
//TODO https://www.codewars.com/kata/55eea63119278d571d00006a/train/typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextId = nextId;
function nextId(ids) {
    //sorts the ids in ascending order
    let ascendingIds = ids.sort((a, b) => a - b);
    console.log(`ascendingIds: ${ascendingIds}`);
    //selects for unique values with a new Set and reconstructs an array
    let uniqueIds = [...(new Set(ascendingIds))];
    console.log(`uniqueIds: ${uniqueIds}`);
    //if the first value isn't 0, return 0
    if (uniqueIds[0] !== 0) {
        return 0;
    }
    //iterate through uniqueIds to see if there is a gap and return the first integer in the gap
    for (let i = 0; i < uniqueIds.length - 1; i++) {
        if (uniqueIds[i] !== (uniqueIds[i + 1] - 1)) {
            return (uniqueIds[i] + 1);
        }
    }
    //returns an integer that is +1 of the highest value of uniqueIds if nothing else
    return (uniqueIds[uniqueIds.length - 1] + 1);
}
//? Top Solution
//*export function nextId(ids: number[]): number {
//     let i = 0;
//     while(ids.includes(i)) {
//       i++
//     }
//     return i;
//*   }
//!major bloat in my answer, a while loop greatly simplifies the logic
//# sourceMappingURL=smallestUnusedID.js.map