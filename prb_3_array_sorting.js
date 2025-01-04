let arr = [19, 10, 16, 1, 3, 4, 6, 8, 9, 11, 7, 12, 14, 13, 2, 15, 17, 18, 20, 5];

const compareNumbers =(a, b)=> {
    return a - b;
}

arr.sort(compareNumbers);
console.log(arr);
