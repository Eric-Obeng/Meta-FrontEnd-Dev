//using the Object.create() method
class Animal {}
var myDog = Object.create(Animal)
console.log(Animal)

//using the new keyword method
class  Car {}
var myDog = new Car()
console.log(Car)


//Inheritance
class Animals {}
class Bird extends Animals {}
class Eagle extends Bird {}
console.log(Eagle)

//Encapsulation
//He you dont really cares about what a particullar method does even if it change,
//as far as it does what want then its fine
var first_name = "eric".toUpperCase(); //the .toUpperCase is the encapsulation
console.log(first_name);

//Abstraction


//Polymorphism
const bycicle = {
    bell: function () {
        return "Ring, ring! Watch out, please!"
    }
}
var alert = bycicle.bell();
console.log(alert);

const door = {
    bell: function () {
        return "Ring, ring! Come here, please!"
    }
}

function ringTheBell(thing) {
    console.log(thing.bell)
}
ringTheBell(door);


var alert = door.bell();
console.log(alert);


//built in concatenating method using .concate()
var alpha = "abc".concat("def")
console.log(alpha)

var alpha = ["abc"].concat(["def"])
console.log(alpha)

var alpha = ["abc"]+["def"];
console.log(alpha)