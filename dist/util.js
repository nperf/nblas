"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prefix = void 0;
const prefix = (x) => {
    if (x instanceof Float64Array) {
        return 'd';
    }
    if (x instanceof Float32Array) {
        return 's';
    }
    throw new Error('invalid type!');
};
exports.prefix = prefix;
