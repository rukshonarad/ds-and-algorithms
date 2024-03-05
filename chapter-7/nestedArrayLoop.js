const loopNestedArray = (array) => {
    let count = 0;
    for (inner of array) {
        for (num of inner) {
            if (num === 1) {
                count++;
            }
        }
    }
    return count;
};
console.log(
    loopNestedArray([
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1]
    ])
);
