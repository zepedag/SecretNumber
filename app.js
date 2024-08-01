let numeroSecreto = 0;
let intentos = 0;   
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);


    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`¡Felicidades, adivinaste el número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
       if (numeroDeUsuario > numeroSecreto){
              asignarTextoElemento('p','El número secreto es menor');
         } else {
              asignarTextoElemento('p','El número secreto es mayor');
         }
            intentos++;
            limpiarCampo();
    }
  
}

function generarNumeroSecreto()
{

    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sortreamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se han sorteado todos los numeros posibles');
    } else{
        //si el numero generado esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function limpiarCampo(){
    document.querySelector('#valorUsuario').value = ''; 

}

function mensajesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto' );
    asignarTextoElemento('p',`Elige un número del 1 al ${numeroMaximo}` );
}

function condicionesIniciales(){
    mensajesIniciales();
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;   
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function reiniciarJuego(){
    limpiarCampo();
    condicionesIniciales();

}

condicionesIniciales();