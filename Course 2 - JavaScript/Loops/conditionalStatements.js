// Using if/else if statements

var age = 0

if (age > 65) {
    console.log("You get your income from your pension")
} else if (age < 65) {
    console.log("Each month you get a salary")
} else if (age < 18) {
    console.log("You get an allowance")
} else {
    console.log("The value of the age variable is not numerical")
}
console.log("\n")


// using switch
var day = "Eric"

switch(day) {
    case "Monday":
        console.log("Do something")
        break;
    case "Tuesday":
        console.log("Do something")
        break;
    case "Wednesday":
        console.log("Do something")
        break;
    case "Thursday":
        console.log("Do something")
        break;
    case "Friday":
        console.log("Do something")
        break;
    case "Saturday":
        console.log("Do something")
        break;
    case "Sunday":
        console.log("Do something")
        break;4
    default:
        console.log("There is no such day");
        break;

}