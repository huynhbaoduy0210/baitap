function isPositiveNumber(n: any): boolean {
    return typeof n === 'number' && n > 0;
}
function validateInput(validator: (arg: any) => boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
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
