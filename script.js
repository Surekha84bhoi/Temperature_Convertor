document.addEventListener('DOMContentLoaded', function () {
    const temperatureInput = document.getElementById('temperature');
    const unitSelect = document.getElementById('unit');
    const convertButton = document.getElementById('convert');
    const result = document.getElementById('result');

    convertButton.addEventListener('click', function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;

        if (isNaN(temperature)) {
            result.textContent = 'Please enter a valid temperature.';
            return;
        }

        if (unit === 'celsius') {
            const fahrenheit = (temperature * 9/5) + 32;
            result.textContent = `${temperature} Celsius is equal to ${fahrenheit.toFixed(2)} Fahrenheit.`;
        } else if (unit === 'fahrenheit') {
            const celsius = (temperature - 32) * 5/9;
            result.textContent = `${temperature} Fahrenheit is equal to ${celsius.toFixed(2)} Celsius.`;
        }
    });
});
