const findUniqueNumbers = (numbers) => {
    const uniqueNumbers = [];
    for (const number of numbers) {
        if (!uniqueNumbers.includes(number)) {
            uniqueNumbers.push(number);
        }
    }
    console.log("Unique numbers are:", uniqueNumbers);
};

const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
findUniqueNumbers(numbers);
