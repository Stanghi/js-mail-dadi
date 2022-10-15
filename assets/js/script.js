// MAIL
/* Consegna:
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

const listaMail = ['stanghi@gmail.com', 'lando@gmail.com', 'max@gmail.com'];
let found = false;

const btnCloseMail = document.getElementById('btn-close-mail');
const outputMail = document.querySelector('.output-mail');
let outputMailInvisible = true;

const btnInput = document.getElementById('btn-input');
btnInput.addEventListener('click', function(){

    if (outputMailInvisible){
        outputMail.classList.remove('d-none');
        btnCloseMail.classList.remove('d-none');
    }

    const mailInput = document.getElementById('mail-user').value;

    if (mailInput !== ""){
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
            document.getElementById('output').innerHTML = `<strong>SI!</strong> è compresa`;
        }
        else{
            document.getElementById('output').innerHTML = `<strong>NO!</strong> non è compresa`;
        }
    }
    else{
        document.getElementById('output').innerHTML = `<strong>Nessuna mail fornita</strong>`;
    }
});

// BOTTONE CLOSE MAIL
btnCloseMail.addEventListener('click', function(){
    if (outputMailInvisible){
        outputMail.classList.add('d-none');
        btnCloseMail.classList.add('d-none');
    }
});

// DICE
/* Consegna:
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// ARRAY DI ICONE CON LE FACCE DEI DADI
const faces = [
    [`<i class="fa-solid fa-dice-one"></i>`],
    [`<i class="fa-solid fa-dice-two"></i>`],
    [`<i class="fa-solid fa-dice-three"></i>`],
    [`<i class="fa-solid fa-dice-four"></i>`],
    [`<i class="fa-solid fa-dice-five"></i>`],
    [`<i class="fa-solid fa-dice-six"></i>`],
];
let uno = false;
let due = false;
let tre = false; 
let quattro = false;
let cinque = false;
let sei = false;


const btnCloseDadi = document.getElementById('btn-close-dadi');
const outpuDadi = document.querySelector('.output-dadi');
let outputDadiInvisible = true;

// EVENTO CLICK SU BOTTONE PLAY
const btnDadi = document.getElementById('btn-input-dadi');
btnDadi.addEventListener('click', function(){

    
    // MOSTRA DIV
    if (outputDadiInvisible){
        outpuDadi.classList.remove('d-none');
        btnCloseDadi.classList.remove('d-none');
        document.getElementById('btn-input-dadi').innerHTML = "Play again";
    }

    // GENERA NUMERO RANDOME PER USER E PC
    const numberUser = Math.ceil(Math.random() * 6);
    const numberPC = Math.ceil(Math.random() * 6);
    console.log("USER",numberUser);
    console.log("PC",numberPC);
    
    // DEFINISCE CHI VINCE E SE E' PATTA
    if (numberUser > numberPC){
        console.log("USER VINCE");
        document.getElementById('output-dadi').innerHTML = `<strong>USER VINCE<\strong>`;
    }
    else if (numberUser < numberPC){
        console.log("PC VINCE");
        document.getElementById('output-dadi').innerHTML = `<strong>PC VINCE<\strong>`; 
    }
    else{
        console.log("PATTA");
        document.getElementById('output-dadi').innerHTML = `<strong>PATTA<\strong>`; 
    }

    // ITERA NELL'ARRAY DELLE ICONE
    for (let i = 0; i < faces.length; i++){
        if (numberPC === 1 || numberUser == 1) uno = true;
        if (numberPC === 2 || numberUser == 2) due = true;
        if (numberPC === 3 || numberUser == 3) tre = true;
        if (numberPC === 4 || numberUser == 4) quattro = true;
        if (numberPC === 5 || numberUser == 5) cinque = true;
        if (numberPC === 6 || numberUser == 6) sei = true;
    }

    if (uno){
         document.getElementById('user').innerHTML = faces[numberUser - 1];
         document.getElementById('pc').innerHTML = faces[numberPC - 1];
         uno = false;
    }
    if (due){
        document.getElementById('user').innerHTML = faces[numberUser - 1];
        document.getElementById('pc').innerHTML = faces[numberPC - 1];
        due = false;
    }
    if (tre){
         document.getElementById('user').innerHTML = faces[numberUser - 1];
         document.getElementById('pc').innerHTML = faces[numberPC - 1];
         tre = false;
    }
    if (quattro){
         document.getElementById('user').innerHTML = faces[numberUser - 1];
         document.getElementById('pc').innerHTML = faces[numberPC - 1];
         quattro = false;
    }
    if (cinque){
         document.getElementById('user').innerHTML = faces[numberUser - 1];
         document.getElementById('pc').innerHTML = faces[numberPC - 1];
         cinque = false;
    }
    if (sei){
         document.getElementById('user').innerHTML = faces[numberUser - 1];
         document.getElementById('pc').innerHTML = faces[numberPC - 1];
         sei = false;
    }
});

// BOTTONE CLOSE DICE
btnCloseDadi.addEventListener('click', function(){
    if (outputDadiInvisible){
        outpuDadi.classList.add('d-none');
        btnCloseDadi.classList.add('d-none');
        document.getElementById('btn-input-dadi').innerHTML = "Play";
    }
});