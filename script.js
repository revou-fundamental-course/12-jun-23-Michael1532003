function convertCelsiusToFahrenheit() {
  var celsius = parseFloat(document.getElementById('celsiusInput').value);
  var fahrenheit = (celsius * (9 / 5)) + 32;
  document.getElementById('fahrenheitInput').value = fahrenheit.toFixed(2);
  document.getElementById('explainationBtn').style.display = 'inline-block';
  document.getElementById('explanation').innerHTML = celsius + "*(9 / 5) + 32 =" + fahrenheit;
}

function convertFahrenheitToCelsius() {
  var fahrenheit = parseFloat(document.getElementById('fahrenheitInput').value);
  var celsius = (fahrenheit - 32) * (5 / 9);
  document.getElementById('celsiusInput').value = celsius.toFixed(2);
  document.getElementById('explainationBtn').style.display = 'inline-block';
  document.getElementById('explanation').innerHTML = "(" + fahrenheit + "- 32) * (5 / 9) =" + celsius;

}

function showExplanation() {
  var explanationDiv = document.getElementById('explanation');
  if (explanationDiv.style.display === 'none') {
    explanationDiv.style.display = 'block';
  } else {
    explanationDiv.style.display = 'none';
  }
}
/*The showExplanation() function gets the explanation div element by its id and toggles its display property between 'none' and 'block'. When the button is clicked, the explanation div will be shown or hidden accordingly.
 
 Now, when you click the "Explanation" button, the div containing the explanation will be displayed, and clicking it again will hide the explanation.*/

function Reset() {
  document.getElementById('celsiusInput').value = null
  document.getElementById('fahrenheitInput').value = null
  document.getElementById('explainationBtn').style.display = 'none';
  document.getElementById('explanation').style.display = 'none';
  document.getElementById('explanation').innerHTML = "";
}




