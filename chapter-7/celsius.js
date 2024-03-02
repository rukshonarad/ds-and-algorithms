function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit;
}

// Example usage:
var celsiusTemperature = 20;
console.log(
    celsiusTemperature +
        " degrees Celsius is equal to " +
        celsiusToFahrenheit(celsiusTemperature) +
        " degrees Fahrenheit."
);
