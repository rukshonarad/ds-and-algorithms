const printItem = (items) => {
    for (const item of items) {
        console.log("Here is items:" + item);
    }
};
console.log(printItem(["apple", "banana", "peach", "cherry"]));
