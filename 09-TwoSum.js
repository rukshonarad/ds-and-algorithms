function twoSum(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[i] + array[j] === 10) {
                return true;
            }
        }
    }
    return false;
}

console.log(twoSum([2, 4, 6, 8])); // Output: true (because 2 + 8 equals 10)
