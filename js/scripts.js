var add = function(number1, number2) {
    return number1 + number2;
  };

var tempConvert = function(answer) {
    return (answer * -17.222);
};
  
  var number1 = parseInt(prompt("Enter a number:"));
  var number2 = parseInt(prompt("Enter another number:"));
  var result = add(number1, number2);
  alert(result);
  var result = parseInt(prompt("Enter a temperature"));
  var answer = tempConvert(result);
  alert(answer);
  