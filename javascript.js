'use strict';
// 1. Каждому объекту из этого массива необходимо добавить метод .sayHello() который выводит сообщение вида "Hello! My name is {NAME}", где NAME - это поле name каждого объекта

const persons = [
    {
        name: 'One',
        age: 1,
    },
    {
        name: 'Two',
        age: 2
    },
    {
        name: 'Three',
        age: 3
    },
    {
        name: 'Four',
        age: 4
    }
];
function sayHello () {
    console.log(`Hello! My name is ${this.name}`);
}

// persons.forEach((person) => {
//     person.sayHello = sayHello;
// })
// persons[0].sayHello();

// 2. используя setTimeout и .forEach(), вызовите метод .sayHello() у каждого объекта с задержкой в 1 секунду

// persons.forEach((person) => {
//     setTimeout(sayHello.bind(person), 1000);
// })

// 3. используя объект


// заставьте creature воспользоваться методом .sayHello() любого объекта из массива, при этом не добавляя этот метод в creature

// const creature = { 
//     name: 'Ctulhu', 
//     eyes: 8 };

// persons.forEach((person) => {
//     person.sayHello = sayHello;
// })

// persons[1].sayHello.call(creature);


