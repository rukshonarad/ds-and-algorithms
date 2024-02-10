const isWordStartsWithA = (...words) => {
    const result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith("a")) {
            result.push(words[i]);
        }
    }
    return result;
};

console.log(isWordStartsWithA("banana", "apple", "kivi"));
