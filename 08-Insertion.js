function insertionSort(array) {
    for (let index = 1; index < array.length; index++) {
        let tempValue = array[index];
        let position = index - 1;

        while (position >= 0 && array[position] > tempValue) {
            array[position + 1] = array[position];
            position--;
        }

        array[position + 1] = tempValue;
    }

    return array;
}

console.log(insertionSort([5, 3, 8, 4, 2]));

function intersection(firstArray, secondArray) {
    let result = [];

    for (let i = 0; i < firstArray.length; i++) {
        for (let j = 0; j < secondArray.length; j++) {
            if (firstArray[i] === secondArray[j]) {
                result.push(firstArray[i]);
            }
        }
    }

    return result;
}

console.log(intersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
