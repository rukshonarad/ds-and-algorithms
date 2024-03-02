function markInventory(clothingItems) {
    var clothingOptions = [];

    for (var i = 0; i < clothingItems.length; i++) {
        var item = clothingItems[i];
        for (var size = 1; size <= 5; size++) {
            clothingOptions.push(item + " Size: " + size);
        }
    }

    return clothingOptions;
}
console.log(
    markInventory([
        "Purple Shirt Size: 1",
        "Purple Shirt Size: 2",
        "Purple Shirt Size: 3",
        "Purple Shirt Size: 4",
        "Purple Shirt Size: 5",
        "Green Shirt Size: 1",
        "Green Shirt Size: 2",
        "Green Shirt Size: 3",
        "Green Shirt Size: 4",
        "Green Shirt Size: 5"
    ])
);
