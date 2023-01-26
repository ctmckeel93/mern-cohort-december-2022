class Animal {
    constructor(name, species, description) {
        this.name = name, 
        this.species = species
        this.description = description
        console.log("Creating new Animal from constructor")
    }

    makeNoise() {
        console.log("Make some noise!")
    }

    displayInfo() {
        console.log(`Hi! I am a ${this.species} named ${this.name} and I am ${this.description}`)
    }
}

let animal1 = new Animal("Potato", "Dog", "The goodest boy");
let animal2 = new Animal("Mario", "Dog", "Lets'a go");

const {name, species, description } = animal1
console.log(name)
animal1.makeNoise()
animal1.displayInfo();
animal2.displayInfo();

class Cat extends Animal {
    constructor(name, description) {
        super(name, "Cat", description);
        this.lives = 9;
        console.log("Making a cat from constructor");
    }

    makeNoise() {
        super.makeNoise();
        console.log("Meow");
    }
}

let cat = new Cat("Puss in boots", "Fear me if you dare!");
cat.displayInfo();
cat.makeNoise();