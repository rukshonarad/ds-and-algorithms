const isDublicateNumber = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[i] === array[j]) {
                return true;
            }
        }
    }
    return false;
};
// console.log(isDublicateNumber([1, 2, 4, 5, 6, 7, 8, 9])); //false
// console.log(isDublicateNumber([1, 1, 4, 5, 6, 7, 8, 8]));

const isDuplicateNumberWithOneLoop = (array) => {
    let existingNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (existingNumbers[array[i]] === 1) {
            return true;
        } else {
            existingNumbers[array[i]] = 1;
        }
    }
    return false;
};
console.log(isDuplicateNumberWithOneLoop([5, 4, 5, 6, 7, 8, 8]));
