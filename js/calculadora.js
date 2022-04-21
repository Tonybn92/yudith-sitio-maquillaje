
var hayResultado = false;
window.onload= cargarPantalla;
function concatenaOperacion(valor) {

    var resultado = document.getElementById("res");
    var operacion = document.getElementById("ans");
    let digito = Number.parseInt(valor);

    if (hayResultado) {
        document.calculator.ans.value = "";
        document.calculator.res.value = "";
        hayResultado = false;
    }

    if (Number.isNaN(digito)) {

        resultado.value = "";

    } else {
        resultado.value += valor;
    }
    operacion.value += valor;
}

function ejecutaExpresion(expresion) {
    try {
        document.calculator.res.value = eval(expresion);
        hayResultado = true;

    } catch (error) {
        alert("Error al calcular expresion" + error);


    }
}


function regMemoriaLocal(expresion, resultado) {

    var valor = expresion + "=" + resultado;

    if (typeof (Storage) !== "undefined") {

        var memRegistro = JSON.parse(localStorage.getItem("memRegistro"));
        var arreglo = new Array();

        if (memRegistro == null) {
            arreglo[0] = valor;
        } else {
            arreglo = memRegistro;
            arreglo[arreglo.length] = valor;
        }

        localStorage.setItem("memRegistro", JSON.stringify(arreglo));
        var combo = document.getElementById("mem");
        combo.innerHTML = combo.innerHTML + "<option>" + valor + "<valor>";

    }

}



function cargarPantalla() {

    if (typeof (Storage) !== "undefined") {
        var memRegistro = JSON.parse(localStorage.getItem("memRegistro"));
        if (memRegistro != null) {

            var combo = document.getElementById("mem");
            for (var i = 0; i < memRegistro.length; i++) {
                combo.innerHTML = combo.innerHTML + "<option>" + memRegistro[i] + "<option>";
            }
        }

    }

}
