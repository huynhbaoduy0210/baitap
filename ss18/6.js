"use strict";
function typeCheck(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const paramTypes = Reflect.getMetadata('design:paramtypes', target, propertyKey);
        for (let i = 0; i < args.length; i++) {
            const argType = typeof args[i];
            const expectedType = paramTypes[i] ? paramTypes[i].name.toLowerCase() : 'undefined';
            if (argType !== expectedType) {
                throw new TypeError(`Argument at index ${i} is of type ${argType}, expected ${expectedType}`);
            }
        }
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
