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
