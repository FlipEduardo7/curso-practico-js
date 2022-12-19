let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let resultado = document.getElementById("resultado");
let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", sumar);

function sumar(){
    let res = parseInt(num1.value) + parseInt(num2.value);
    resultado.innerText = 'Resultado: ' + res;
}

