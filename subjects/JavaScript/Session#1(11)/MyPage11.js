const resultInput = document.querySelector('.result');
const buttons = document.querySelectorAll('.data');
const clearButton = document.querySelector('#clear');
const equalButton = document.querySelector('#equal');

buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {

    try {
      const result = eval(resultInput.value);
      resultInput.value = result;
    } catch (error) {
      resultInput.value = 'Error';
    }
  } else if (clickedButtonValue === 'C') {
    resultInput.value = '';
  } else {
    resultInput.value += clickedButtonValue;
  }
}

clearButton.addEventListener('click', () => {
  resultInput.value = '';
});
