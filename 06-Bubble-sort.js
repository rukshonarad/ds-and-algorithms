function bubbleSort(array) {
    const length = array.length;
    let swapped = true;

    while (swapped) {
        swapped = false;
        for (let i = 0; i < length - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]]; // Swap elements
                swapped = true;
            }
        }
        length--; // Optimization: Last element is already in place after each iteration
    }
    return array;
}

let array = [9, 3, 5, 7, 8, 1, 2, 3]; //[  1, 2, 3, 3, 5, 7, 8, 9]

console.log(bubbleSort(array));
