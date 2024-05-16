"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("./sum");
const globals_1 = require("@jest/globals");
(0, globals_1.describe)('Sum function', () => {
    (0, globals_1.test)('Returns correct value', () => {
        (0, globals_1.expect)((0, sum_1.sum)(2, 3)).toEqual(5);
    });
});
//# sourceMappingURL=index.test.js.map