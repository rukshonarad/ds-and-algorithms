const isLeapYear = (year) => {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};
console.log(isLeapYear(1997)); //false
console.log(isLeapYear(2000)); //true
