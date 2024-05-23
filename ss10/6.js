"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this._name = name;
        this._length = length;
    }
    // Phương thức getter cho thuộc tính name
    get name() {
        return this._name;
    }
    // Phương thức setter cho thuộc tính name
    set name(value) {
        this._name = value;
    }
    // Phương thức getter cho thuộc tính length
    get length() {
        return this._length;
    }
    // Phương thức setter cho thuộc tính length
    set length(value) {
        this._length = value;
    }
}
// Sử dụng lớp Song
const song = new Song(1, "Shape of You", 240);
console.log(`ID: ${song.id}`);
console.log(`Name: ${song.name}`);
console.log(`Length: ${song.length}`);
// Thay đổi giá trị của name và length bằng cách sử dụng setter
song.name = "Despacito";
song.length = 215;
console.log(`ID: ${song.id}`);
console.log(`Name: ${song.name}`);
console.log(`Length: ${song.length}`);
