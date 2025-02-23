    //variables
    let numeroMaximoPosible = 100;
    let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
    let numeroUsuario = 0;
    let intentos = 1;
    //let palabraVeces = "vez";
    let maximosIntentos = 6;

    

     while (numeroUsuario != numeroSecreto) {
          numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor:`));

    console.log(numeroUsuario);
    /*
    Este codigo realiza 
    la comparacion
    */
    if (numeroUsuario == numeroSecreto) {
        // acertamos, fue verdadera la condicion
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ?"vez" : "veces"}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert ("El numero secreto es menor");
        } else {
            alert(" El numero secreto es mayor");
        }
        //Incrementamos el contador cuando  no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;
        //palabraVeces = "veces";
        if (intentos > maximosIntentos) {
            alert (`Llegaste  al numero maximo de ${maximosIntentos}intentos`);
            break;
        }
        
        //La condicion no se cumplio
        //alert(" Lo siento, no acertaste el numero");
        // estoy probando
    }

}