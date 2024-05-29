"use strict";
function combine(...functions) {
    return function (...args) {
        let result = args;
        for (const func of functions) {
            result = func(...result);
        }
        return result;
    };
}
