document.addEventListener('DOMContentLoaded', function() {
    var multiplyBtn = document.querySelector('.Multiply');
    var divideBtn = document.querySelector('.Divide');
    
    multiplyBtn.addEventListener('click', multiplyNumbers);
    divideBtn.addEventListener('click', divideNumbers);
    
    var convertBtn = document.querySelector('.Convert');
    
    convertBtn.addEventListener('click', convertTemperature);
  });
  
  function multiplyNumbers() {
    var firstNumber = parseFloat(document.querySelector('.First').value);
    var secondNumber = parseFloat(document.querySelector('.Second').value);
    
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Please provide valid numbers for both inputs.');
        return;
    }
    var result = firstNumber * secondNumber;
    
    document.querySelector('.result').textContent = result;
}
  
  function divideNumbers() {
    var firstNumber = parseFloat(document.querySelector('.First').value);
    var secondNumber = parseFloat(document.querySelector('.Second').value);
    
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Input can not be left blank.');
        return;
    }     
    var result = firstNumber / secondNumber;
    
    document.querySelector('.result').textContent = result;
}
  
  function convertTemperature() {
    var celsius = parseFloat(document.querySelector('.Celsius').value);
    var fahrenheit = parseFloat(document.querySelector('.Fahrenheit').value);
    
    if (isNaN(celsius) && isNaN(fahrenheit)) {
        alert('Input can not be left blank.');
        return;
    }

    if (!isNaN(celsius)) {
      var result = (celsius * 9/5) + 32;
      document.querySelector('.tempeResult').textContent =  result + "°F";
    }
    
    if (!isNaN(fahrenheit)) {
      var result = (fahrenheit - 32) * 5/9;
      document.querySelector('.tempeResult').textContent = result + "°F";
    }

  }
  