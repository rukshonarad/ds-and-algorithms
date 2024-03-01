const sample = (array) => {
    let first = array[0];
    let middle = array[Math.floor(array.length / 2)];
    let last = array[array.length - 1];
    return [first, middle, last];
};
console.log(sample(["helecopter"]));
