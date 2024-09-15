//complete this code
class Animal {
	constructor(species)
		public void makeSound(){
		console.log(`The ${species} makes a sound`)
	}
}

class Dog extends Animal {
		public void bark(){
		console.log("woof")
	}
}

class Cat extends Animal {
	public void purr(){
		console.log("purr")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
