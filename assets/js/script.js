// MAIL
/* Consegna:
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/
console.log("----- MAIL -----");

const listaMail = ['stanghi@gmail.com', 'lando@gmail.com', 'max@gmail.com'];
let found = false;

const mailInput = prompt('Inserisci la tua mail')
console.log('Mail inserita dall\' utente --> ',mailInput);

for (let i = 0; i < listaMail.length; i++){
    if (mailInput === listaMail[i]){
        found = true;
        break;
    }
    else{
        found = false;
    }
}

if (found){
    console.log(`SI! "${mailInput}" è compresa`);
}
else{
    console.log(`NO! "${mailInput}" non è compresa`);
}

// DADI
/* Consegna:
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/
console.log("----- DADI -----");

const numberUser = Math.ceil(Math.random() * 6);
const numberPC = Math.ceil(Math.random() * 6);
console.log("USER",numberUser);
console.log("PC",numberPC);

if (numberUser > numberPC){
    console.log("User vince");
}
else if (numberUser < numberPC){
    console.log("PC vince");
}
else{
    console.log("Patta");
}