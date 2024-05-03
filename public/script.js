
var result = document.getElementById("resultado");
// Funciones para operaciones básicas
function add() {
    var num1 = Number(input1.value);
    var num2 = Number(input2.value);
    result.innerHTML = num1 + num2;
  }
  
  function subtract() {
    var num1 = Number(input1.value);
    var num2 = Number(input2.value);
    result.innerHTML = num1 - num2;
  }
  
  function multiply() {
    var num1 = Number(input1.value);
    var num2 = Number(input2.value);
    result.innerHTML = num1 * num2;
  }
  
  function divide() {
    var num1 = Number(input1.value);
    var num2 = Number(input2.value);
    result.innerHTML = num1 / num2;
  }
 
var addButton = document.getElementById("suma");
var subtractButton = document.getElementById("resta");
var multiplyButton = document.getElementById("multiplicacion");
var divideButton = document.getElementById("division");

  // Vinculación de funciones a botones
  addButton.addEventListener("click", add);
  subtractButton.addEventListener("click", subtract);
  multiplyButton.addEventListener("click", multiply);
  divideButton.addEventListener("click", divide);
  
  // Función avanzada
  
  function mostrarResultado(resultado) {
    alert(resultado);
  }
  
  function calculateAdvanced(input) {
    const inputAvanzada = document.getElementById("input-avanzada");
    const resultadoAvanzada = document.getElementById("resultado-avanzada");
    const calcular = document.getElementById("calcular");
  
    calcular.addEventListener("click", () => {
      const expresion = inputAvanzada.value;
      const regex = /^[-+]?([0-9]+(\.[0-9]+)?)([\+\-\*\/])([-+]?([0-9]+(\.[0-9]+)?))$/;
      if (!regex.test(expresion)) {
        resultadoAvanzada.textContent = "Error: expresión no válida";
      } else {
        const resultado = eval(expresion);
        resultadoAvanzada.textContent = resultado;
  
        // Mostrar el resultado como una alerta
        if (resultadoAvanzada.textContent !== "Error: expresión no válida") {
          mostrarResultado(resultado);
        }
      }
    });
  }
  
  // Invocar la función
  calculateAdvanced();
  