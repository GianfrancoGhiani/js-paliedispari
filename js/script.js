'use strict'
/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/
let userText = document.getElementById('userText');
const sendTextBtn = document.getElementById('sendText');
const answ1 = document.getElementById('answ1');
let userTextAnalize = '';
let userTextRev = '';

sendTextBtn.addEventListener('click', function palindrome(){
    userTextAnalize = userText.value
    userTextRev = userTextAnalize.split('');
    userTextRev = userTextRev.reverse().join('');
    const showText = document.createElement('p');
    answ1.innerHTML= '';
    if (!(userTextAnalize === userTextRev)){
        showText.innerText = "Non ";
    }
    showText.innerText += "è una parola palindroma";
    answ1.append(showText);
    userText.value = '';
}); 


/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/