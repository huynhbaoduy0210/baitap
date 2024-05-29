"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
// Tạo hàm decorator
function logFunction(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    // Thay thế phương thức gốc bằng một phương thức mới
    descriptor.value = function (...args) {
        // Log tên hàm
        console.log(`Function name: ${propertyKey}`);
        // Log tham số đầu vào
        console.log(`Arguments: ${JSON.stringify(args)}`);
        // Gọi hàm gốc và lấy kết quả
        const result = originalMethod.apply(this, args);
        // Log kết quả trả về
        console.log(`Result: ${result}`);
        // Trả về kết quả
        return result;
    };
    return descriptor;
}
// Sử dụng decorator cho một class method
let Example = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _sum_decorators;
    let _greet_decorators;
    return _a = class Example {
            sum(a, b) {
                return a + b;
            }
            greet(name) {
                return `Hello, ${name}!`;
            }
            constructor() {
                __runInitializers(this, _instanceExtraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _sum_decorators = [logFunction];
            _greet_decorators = [logFunction];
            __esDecorate(_a, null, _sum_decorators, { kind: "method", name: "sum", static: false, private: false, access: { has: obj => "sum" in obj, get: obj => obj.sum }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false, access: { has: obj => "greet" in obj, get: obj => obj.greet }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
// Tạo instance của class Example và gọi các phương thức
const example = new Example();
example.sum(2, 3); // Function name: sum, Arguments: [2,3], Result: 5
example.greet('World'); // Function name: greet, Arguments: ["World"], Result: "Hello, World!"
