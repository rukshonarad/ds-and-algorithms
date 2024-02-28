const averageOfEvenNumbers = (array) => {
    let sum = 0.0;
    let countOfEvenNumbers = 0;

    array.forEach((number) => {
        if (number % 2 === 0) {
            sum += number;
            countOfEvenNumbers++;
        }
    });

    return sum / countOfEvenNumbers;
};

console.log(averageOfEvenNumbers([1, 2, 3, 4, 5, 6]));
