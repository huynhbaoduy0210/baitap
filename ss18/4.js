"use strict";
function isPositiveNumber(n) {
    return typeof n === 'number' && n > 0;
}
function validateInput(validator) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            for (const arg of args) {
                if (!validator(arg)) {
                    throw new Error(`Invalid argument: ${arg}`);
                }
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
