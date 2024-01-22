let n = parseInt(prompt("Digite el numero maximo del juego: "));
let numeroSecreto = parseInt(Math.random()*n)+1;
let numeroUsuario;
let intentos = 1;
do{
    numeroUsuario = prompt(`Idica un numero del 1 al ${n}: `);

    if (numeroUsuario == numeroSecreto) {
        alert(`Adivinaste el numero secreto: ${numeroSecreto} en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`)
        break;
    } else if(numeroUsuario>numeroSecreto){
        alert("El numero secreto es MENOR")
    } else {
        alert("El numero secreto es MAYOR")
    }
    intentos++;
}while(true);

