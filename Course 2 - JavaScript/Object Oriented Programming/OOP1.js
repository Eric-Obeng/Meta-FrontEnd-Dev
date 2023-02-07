class Animal {
    constructor(color = "yellow", energy = "100") {
        this.color = color;
        this.energy = energy;
    }
    isActive () {
        if(this.energy > 0) {
            this.energy -= 20;
            console.log("Energy is decreasing, currently at: ", this.energy)
        }else if(this.energy == 0) {
            this.sleep();
        }
    }

    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}

//here we code classes to inherit the properties of the Animal class
class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound)
    }
}

class Bird extends Animal {
    constructor(sound = "chirp", canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

//code three more class HouseCat, Tiger, Parrot to inherit the Cat class above
class HouseCat extends Cat {
    constructor(houseCatsound = "meow", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound,canClimbTrees, canJumpHigh, color, energy)
        this.houseCatsound = houseCatsound;
    }
    makeSound(option) {
        if(option) {
            super.makeSound();
        }
        console.log(this.houseCatsound);
    }
}

class Tiger extends Bird {
    constructor(tigerSound = "Roar!", sound, canJumpHigh, canClimTrees, color, energy) {
        super(sound, canJumpHigh, canClimTrees, color, energy)
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound()
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound, canFly, color, energy) {
        super(sound, canFly, color, energy)
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talkinging parrot!")
        }
    }
}

var polly = new Parrot(true);
var fiji = new Parrot(false);

fiji.makeSound();
fiji.makeSound(true);

polly.makeSound();
polly.makeSound(true);

polly.color;
polly.energy;

polly.isActive();

var penguin = new Bird("shriek", false, "black and white", 200);
penguin;

penguin.sound;
penguin.canFly;
penguin.color;
penguin.energy;
penguin.isActive();

//new cat 
var leo = new HouseCat();
leo.makeSound(false);
leo.makeSound(true);

//new tigger
var cuddles = new Tiger();
cuddles.makeSound(false);
cuddles.makeSound(true);

//
