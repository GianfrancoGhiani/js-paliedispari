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
const section2 = document.getElementById('even&odd');
const even = document.getElementById('even');
const odd = document.getElementById('odd');
let number = document.getElementById('chosen');
const sendNumBtn = document.getElementById('sendNum');
let div = document.createElement('div');
div.setAttribute('id', 'answ2');
div.className='my-3', 'fw-bold';
div.innerHTML = '';
section2.append(div);

function evenNodd (){
    if(number.value > 5){
        div.innerHTML = '';
        section2.append(notificationError('Devi inserire un numero compreso tra 1 e 5!'));
    } else{
        let random = randomNumber(1, 5);
        console.log(random)
        let result = parseInt(number.value) + random;
        div.innerHTML = `Hai scelto il numero ${number.value} a noi come valore randomico è uscito il ${random}, <br>
        quindi la loro somma è ${result}.......`;
        result = isEven(result);
    
        
        if (even.checked && result){
            div.innerHTML += 'Hai Vinto!!' 
        } else if (odd.checked && (!result)){
            div.innerHTML += 'Hai Vinto!!' 
        } else{
            div.innerHTML += 'Hai Perso.'
        }

    }
    even.checked =false;
    odd.checked =false;
    number.value ='';

   
};

sendNumBtn.addEventListener('click', evenNodd)

