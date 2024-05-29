function combine(...functions: Function[]): Function {
    return function(...args: any[]): any {
        let result: any = args;
        for (const func of functions) {
            result = func(...result);
        }
        return result;
    };
}
