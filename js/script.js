// *****Esercizio 1*****
// let number = 100;
// console.log(number);

// *****Esercizio 2*****
// const pi = 3.14;
// console.log(pi);

// *****Esercizio 2/B*****
// pi = 3.1416;
// console.log(pi)

// *****Esercizio 2/C*****
// let radius = 8;

// let circle = radius * 2 * pi
// console.log(circle)

// *****Esercizio 3*****
// let name = 'Carlo';
// name = 'Marco';
// console.log(name)

// *****Esercizio 4*****
// let greet = 'Ciao, Mondo!';
// console.log(greet);

// *****Esercizio 4/B*****
// let greet = 'come stai mondo?'
// console.log(greet)

// *****Esercizio 4/C*****
// greet = greet + ' Come stai?'
// console.log(greet)

// greet = `${greet} Come stai?`
// console.log(greet)

// IF-ELSE

// *****Esercizio 1.2*****
// let num1 = 40;

// let num2 = 20;

// let comparison;

// if(num1 > num2){
//    comparison = num1
// }

// else{
//     comparison = num2
// }

// console.log(comparison)

// *****Esercizio 2.2*****
// let stringa1 = 'ciao';

// let stringa2 = 'come stai';

// let comparison;

// if(stringa1 == stringa2){
//     comparison = 'Uguale';
// }
// else{
//     comparison = 'Diverso';
// }

// console.log(comparison);

// *****Esercizio 3.2*****
// let num = 3;

// let compara;

// if(num == '3'){
//     compara = true;
// }
// else{
//     compara = false;
// }

// console.log(compara);

// CICLO FOR 

// *****Esercizio 1/A***** 
// for(let i =1; i<=42; i++){
//     console.log(i);
// }

// *****Esercizio 1/B***** 
// for(let i=42; i>=1; i--){
//     console.log(i);
// }

// ARRAY

// *****Esercizio 1/array***** 
// const numbers = [1,2,3,4,5,6,7,8];
// console.log(numbers);

// // *****Esercizio 2/array***** 
// const fruits = ['mela', 'banana', 'pesca', 'pera', 'albicocca', 
// 'mango', 'kiwi', 'papaya'];
// console.log(fruits);

// *****Esercizio 3/array***** 
// console.log(fruits.length);

// TUTOR
// *****Esercizio TUTOR*****
// const numOfElements = parseInt(prompt('Inserisci un numero intero'));
// let numbers = [];

// let somma = 0;

// for(let i=1; i<=numOfElements; i++){
//     numbers.push(i);
//     somma += numbers;
// }

// console.log(numbers);
// console.log(numbers.length);
// console.log(somma);

// FUNZIONI

// **Esercizio F-1**
// function hello(){
//     alert('ciao mondo');
// }

// // **Esercizio F-2**
// hello();

// // **Esercizio F-3**
// function twoNumbers(num1, num2){
//     let somma = num1 + num2;

//     return somma;
// }

// // **Esercizio F-4**
// let result = twoNumbers(3,5);
// console.log(result); 

// **Esercizio F-5**
// function getOneStringFromTwo(a,b){
//     let result = a + ' ' + b;
//     return result;
// }

// // **Esercizio F-6**
// let stringa1 = 'Ciao';
// let stringa2 = 'grande';

// let finish = getOneStringFromTwo(stringa1,stringa2);
// console.log(finish);


// TIMING FUNCTION


// **Esercizio 1/A**
// setTimeout(function(){
//     alert('ciao a tutti')
// }, 3000);

// **Esericio 2/A**
// let time = 0;

// setInterval(function(){
//     time++;
//     console.log(time);
// }, 1000);


// OBJECTS


// // **Esercizio 1/A**
// let persona = {
//     'nome' : 'Giovanni',
//     'cognome' : 'D Ubaldo'
// }

// // **Esercizio 1/B**
// persona.nome;
