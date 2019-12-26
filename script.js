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


let objA = {
    character: 'antihero',
    intro() { console.log("I'm angry");}
};

function Create(){};

Create.prototype = objA;

let objB = new Create;
objB.color = 'black';
objB.getQuestion = function() { console.log("Why?");};

Create.prototype = objB;

let objC = new Create;
objC.size =  'big';
objC.sayHi = function() { alert("Hi");};


console.log(objB.character);
objC.getQuestion();