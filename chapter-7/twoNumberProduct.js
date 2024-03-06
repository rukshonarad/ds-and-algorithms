const twoNUmberProduct = (array) => {
    let product = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            product.push(array[i] * array[j]);
        }
    }
    return product;
};
console.log(twoNUmberProduct([1, 2, 3, 4, 5]));
