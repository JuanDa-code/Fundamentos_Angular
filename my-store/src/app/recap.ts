const username: string = 'Juan';

const sum = (a: number, b: number) => a + b;

sum(1, 3);

class Person {
  constructor(public age: number, public lastName: string) { };
};

const juan = new Person (19, 'Oviedo');

console.log(juan.age);
