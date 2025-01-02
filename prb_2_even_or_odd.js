function checkOddOrEven(number) {
    if (number % 2 === 0) {
        return "It is Even Number";
    } else {
        return "It is Odd Number";
    }
}

let userInput = prompt("Enter a number:");
let number = parseInt(userInput);
console.log(checkOddOrEven(number));