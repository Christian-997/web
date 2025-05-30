numberOne = document.getElementById("numero1");
numberTwo = document.getElementById("numero2");
result = document.getElementById("resultado");
botonSumar = document.getElementById("sumar");
botonSumar.disabled = true;
function validar() {
    if (numberOne.value.trim() !== "" && numberTwo.value.trim() !== "") {
        botonSumar.disabled = false; 
    } else {
        botonSumar.disabled = true;
        result.value = ""; 
    }
}
function sumar(){
    result.value = parseFloat(numberOne.value) + parseFloat(numberTwo.value)
}

botonSumar.addEventListener("click",sumar);
numberOne.addEventListener("input",validar);
numberTwo.addEventListener("input",validar);

