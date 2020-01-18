'use strict';

// let objA = {
//     character: 'antihero',
//     intro() { console.log("I'm angry");}
// };
// let objB = {
//     color: 'black',
//     getQuestion() { console.log("Why?");},
//     __proto__: objA
// };
// let objC = {
//     size: 'big',
//     sayHi() { alert("Hi");},
//     __proto__: objB
// };

// console.log(objC.color);
// console.log(objB.character);



// let objA = {
//     character: 'antihero',
//     intro() { console.log("I'm angry");}
// };

// let objB = Object.create(objA);
// objB.color = 'black';
// objB.getQuestion = function() { console.log("Why?");};

// let objC = Object.create(objB);
// objC.size =  'big';
// objC.sayHi = function() { alert("Hi");};

// console.log(objC.color);
// objB.intro();


function ObjectA(character) {
    this.character = character;
}

ObjectA.prototype.getCharacter = function(character) {
    console.log(`object's character is ${this.character}`);
}

function ObjectB(character, color) {
    ObjectA.call(this, character);
    this.color = color;
}

ObjectB.prototype = Object.create(ObjectA.prototype);
ObjectB.prototype.constructor = ObjectB;
ObjectB.prototype.getColor = function(color) { 
    console.log(`object's color is ${this.color}`);
}

let objB = new ObjectB('antihero', 'black');
console.log(objB);


function ObjectС(character, color, size) {
    ObjectB.call(this, character, color);
    this.size = size;
}

ObjectС.prototype = Object.create(ObjectB.prototype);
ObjectС.prototype.constructor = ObjectС;
ObjectС.prototype.getSize = function(size) { 
    console.log(`object's size is ${this.size}`);
}

let objC = new ObjectС('antihero', 'black', 'big');
console.log(objC);