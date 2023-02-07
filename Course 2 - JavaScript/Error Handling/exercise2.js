//Defensive Programming

// function letterFinder(word, match) {
//     var condition1 = typeof(word) == 'string' && word.length >= 2;
//     var condition2 = typeof(match) == 'string' && match.length == 1;
//     if (condition1 == true && condition2 == true) {
//         for (i = 0; i < word.length; i++) {
//             if (word[i] == match) {
//                 console.log("Found the", match, "at", i)
    
//             }else {
//                 console.log("---No match found at", i)
//             }
//         }
//     }
//     else {
//         console.log("Please pass correct arguments to the function")
//     }
    
// }
// letterFinder(2, 4)
// letterFinder("Eric", "c")


function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())