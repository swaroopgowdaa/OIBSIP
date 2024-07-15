function convertTemperature() {
    const temperature = document.getElementById('temperatureInput').value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const result = document.getElementById('result');

    if (isNaN(temperature)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    let convertedTemperature;
    switch (unit) {
        case 'Celsius':
            convertedTemperature = `${temperature}°C is ${celsiusToFahrenheit(temperature)}°F or ${celsiusToKelvin(temperature)}K`;
            break;
        case 'Fahrenheit':
            convertedTemperature = `${temperature}°F is ${fahrenheitToCelsius(temperature)}°C or ${fahrenheitToKelvin(temperature)}K`;
            break;
        case 'Kelvin':
            convertedTemperature = `${temperature}K is ${kelvinToCelsius(temperature)}°C or ${kelvinToFahrenheit(temperature)}°F`;
            break;
    }
    result.textContent = convertedTemperature;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusToKelvin(celsius) {
    return parseFloat(celsius) + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}
