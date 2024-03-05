const isPalindrome = (str) => {
    let left = 0;
    let right = str.length - 1;
    while (left < str.length / 2) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
console.log(isPalindrome("abba"));
