"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formattedError = exports.isError = void 0;
const isError = (error) => {
    return (typeof error.message !== 'undefined' && typeof error.code !== 'undefined');
};
exports.isError = isError;
const formattedError = (error) => {
    return exports.isError(error) ? error.message : error;
};
exports.formattedError = formattedError;
//# sourceMappingURL=isError.js.map