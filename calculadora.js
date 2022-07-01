var operandoa;
var operandob;
var operacion;

function init(){
    //variables
    var resultado = document.getElementById('resultado');

    var reset = document.getElementById('reset');
    reset.addEventListener('click', resetear);

    var suma = document.getElementById('suma');
    suma.addEventListener('click', sumaOp);

    var resta = document.getElementById('resta');
    resta.addEventListener('click', restaOp);

    var multiplicacion = document.getElementById('multiplicacion');
    multiplicacion.addEventListener('click', multiplicacionOp);

    var division = document.getElementById('division');
    division.addEventListener('click', divisionOp);
    
    var igual = document.getElementById('igual');
    igual.addEventListener('click', igualOperacion);

    var uno = document.getElementById('uno');
    uno.addEventListener('click', numeroUno);

    var dos = document.getElementById('dos');
    dos.addEventListener('click', numeroDos);

    var tres = document.getElementById('tres');
    tres.addEventListener('click', numeroTres);

    var cuatro = document.getElementById('cuatro');
    cuatro.addEventListener('click', numeroCuatro);

    var cinco = document.getElementById('cinco');
    cinco.addEventListener('click', numeroCinco);

    var seis = document.getElementById('seis');
    seis.addEventListener('click', numeroSeis);

    var siete = document.getElementById('siete');
    siete.addEventListener('click', numeroSiete);

    var ocho = document.getElementById('ocho');
    ocho.addEventListener('click', numeroOcho);

    var nueve = document.getElementById('nueve');
    nueve.addEventListener('click', numeroNueve);

    var cero = document.getElementById('cero');
    cero.addEventListener('click', numeroCero);
  }


//Eventos de Numeros
function numeroUno(){
    resultado.textContent = resultado.textContent  + "1";
}
function numeroDos(){
    resultado.textContent = resultado.textContent  + "2";
}
function numeroTres(){
    resultado.textContent = resultado.textContent  + "3";
}
function numeroCuatro(){
    resultado.textContent = resultado.textContent  + "4";
}
function numeroCinco(){
    resultado.textContent = resultado.textContent  + "5";
}
function numeroSeis(){
    resultado.textContent = resultado.textContent  + "6";
}
function numeroSiete(){
    resultado.textContent = resultado.textContent  + "7";
}
function numeroOcho(){
    resultado.textContent = resultado.textContent  + "8";
}
function numeroNueve(){
    resultado.textContent = resultado.textContent  + "9";
}
function numeroCero(){
    resultado.textContent = resultado.textContent  + "0";
}

//Eventos Operacionales
function resetear(){
    resetear();
}
function sumaOp(){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
function restaOp(){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
function multiplicacionOp(){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
function divisionOp(){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
function igualOperacion(){ 
    operandob = resultado.textContent;
    resolver();
}


//Funciones
function limpiar(){
    resultado.textContent = "";
  }
  
  function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }


  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resultado.textContent = res;
  }

  
  

