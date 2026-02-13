const value1 = [];
const buttonValue = document.querySelectorAll('.myButton');
const displayValue = [];

buttonValue.forEach(button => {
  button.addEventListener('click', () => {
    let valueOfTheButton = button.value;
    if(valueOfTheButton ==='AC'){
      value1.length = 0;
      displayValue.length = 0;
     }
    if(valueOfTheButton === 'DE'){
      value1.splice(value1.length - 1, 1);
      displayValue.splice(displayValue.length - 1, 1);
     }
    if( valueOfTheButton != '=' && valueOfTheButton != 'AC' && valueOfTheButton != 'DE' ){
      displayValue.push(valueOfTheButton)};
    console.log(displayValue);
    document.querySelector('.button1').value = '';
    displayValue.forEach((values) =>{
      document.querySelector('.button1').value += values;
    });
    console.log(valueOfTheButton);
  if (valueOfTheButton === '=') {
        let value2 = value1.join('');
        let result = eval(value2);
        document.querySelector('.button1').value = result;
    
      value1.length = 0;
      displayValue.length = 0;
    };
    if( valueOfTheButton != '=' && valueOfTheButton != 'AC' && valueOfTheButton != 'DE' ){
    value1.push(valueOfTheButton);}
  });
});
