"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smallestUnusedID_1 = require("./smallestUnusedID");
//console.log('in index.js')
console.log((0, smallestUnusedID_1.nextId)([0, 1, 2, 2, 3, 5]));
console.log((0, smallestUnusedID_1.nextId)([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log((0, smallestUnusedID_1.nextId)([24, 2, 26, 20, 21, 19]));
//# sourceMappingURL=index.js.map