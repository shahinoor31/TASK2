function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromtext = document.getElementById("fromtext").value;
    const resultElement = document.getElementById("result");
    
    
    if (isNaN(inputTemp)) {
      resultElement.textContent = "Please enter a valid number.";
      return;
    }
    
    if (fromtext === "celsius") {
      const fahrenheit = (inputTemp * 9/5) + 32;
      resultElement.textContent = `${inputTemp}°C is ${fahrenheit.toFixed(2)}°F`;
    } else if (fromtext === "fahrenheit") {
      const celsius = (inputTemp - 32) * 5/9;
      resultElement.textContent = `${inputTemp}°F is ${celsius.toFixed(2)}°C`;
    }
  }