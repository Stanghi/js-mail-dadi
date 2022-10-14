// MAIL
/* Consegna:
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

const listaMail = ['stanghi@gmail.com', 'lando@gmail.com', 'max@gmail.com'];
let found = false;

const outputMail = document.querySelector('.output-mail');
let outputMailInvisible = true;

const btnInput = document.getElementById('btn-input');
btnInput.addEventListener('click', function(){

    if (outputMailInvisible){
        outputMail.classList.remove('hide');
    }

    const mailInput = document.getElementById('mail-user').value;
    document.getElementById('1').innerHTML = `Mail inserita: <strong> ${mailInput} </strong>`;

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
        console.log();
        document.getElementById('2').innerHTML = `SI! è compresa`;
    }
    else{
        document.getElementById('2').innerHTML = `NO! non è compresa`;
    }

});

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