"use strict";
class BaseClass {
    constructor(protectedProperty, privateProperty) {
        this.protectedProperty = protectedProperty;
        this.privateProperty = privateProperty;
    }
    showProperties() {
        console.log(`Protected Property: ${this.protectedProperty}`);
        console.log(`Private Property: ${this.privateProperty}`);
    }
}
class DerivedClass extends BaseClass {
    constructor(protectedProperty, privateProperty) {
        super(protectedProperty, privateProperty);
    }
    showPropertiesFromDerived() {
        console.log(`Accessing protected property from derived class: ${this.protectedProperty}`);
        // console.log(`Accessing private property from derived class: ${this.privateProperty}`); // This will cause an error
    }
}
// Create an instance of DerivedClass and test the access modifiers
const derived = new DerivedClass("ProtectedValue", "PrivateValue");
derived.showProperties();
derived.showPropertiesFromDerived();
// Accessing directly from instance (outside of class) will also cause an error
// console.log(derived.protectedProperty); // Error: Property 'protectedProperty' is protected and only accessible within class 'BaseClass' and its subclasses.
// console.log(derived.privateProperty);   // Error: Property 'privateProperty' is private and only accessible within class 'BaseClass'.
