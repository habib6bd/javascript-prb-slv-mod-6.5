const findBiggestNumber = (numbers) => {
    let biggestNumber = numbers[0]; 
    for (const number of numbers) {
        if (number > biggestNumber) {
            biggestNumber = number; 
        }
    }
    console.log("The biggest number is:", biggestNumber);
};

const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
findBiggestNumber(numbers);
