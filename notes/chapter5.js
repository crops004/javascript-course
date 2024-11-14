// oop 

const me = {
    name: "Eve",
    age: 20,
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const you = new Person("Alice", 25);

class Gamer extends Person {
    constructor(name, age, game) {
        super(name, age);
        this.game = game;
    }

    play() {
        console.log(`Playing ${this.game}`);
    }
}

const player = new Gamer("Bob", 30, "Chess");
console.log(player);

// getters and setters
class MyClass {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(newName) {
        this._name = newName;
    }
}

const obj = new MyClass("Alice");
console.log(obj); // ALICE