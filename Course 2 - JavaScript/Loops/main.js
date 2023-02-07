//Task 1
var score = 8;
console.log("Mid-level skills: ", score > 0 && score < 10);

//Task 2
// Video game code
var timeRemaining = 0;
timeRemaining = 5; // this will make the program output false
var energy = 10;
console.log("Game over:", timeRemaining == 0 || energy == 0);
console.log("\n")

//Task 3
//Using the modulus to test if a given number is odd
var num1, num2, test1, test2, result1, result2;
num1 = 2;
num2 = 5;
test1 = num1 % 2;
test2 = num2 % 2;

result1 = test1 == 0;
result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);
console.log("\n")


//Task 4
//Adding numbers using the + operator
console.log(5+10);
console.log("\n")

//Task 5
//Concatenate numbers and strings using the + operator
var now = "Now in ";
var three = 3;
var d = "D!";
console.log(now + three + d);
console.log("\n")

//Task 6
//Use the += operator to accumulate values in variables
var counter = 0;
counter += 5;
counter += 3;
console.log(counter);
