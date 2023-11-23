// *****Esercizio 1*****
let number = 100;
console.log(number);

// *****Esercizio 2*****
const pi = 3.14;
console.log(pi);

// *****Esercizio 2/B*****
// pi = 3.1416;
// console.log(pi)

// *****Esercizio 2/C*****
let radius = 8;

let circle = radius * 2 * pi
console.log(circle)

// *****Esercizio 3*****
let name = 'Carlo';
name = 'Marco';
console.log(name)

// *****Esercizio 4*****
let greet = 'Ciao, Mondo!';
console.log(greet);

// *****Esercizio 4/B*****
// let greet = 'come stai mondo?'
// console.log(greet)

// *****Esercizio 4/C*****
// greet = greet + ' Come stai?'
// console.log(greet)

greet = `${greet} Come stai?`
console.log(greet)

// IF-ELSE

// *****Esercizio 1.2*****
let num1 = 40;

let num2 = 20;

// let comparison;

// if(num1 > num2){
//    comparison = num1
// }

// else{
//     comparison = num2
// }

// console.log(comparison)

// *****Esercizio 2.2*****
let stringa1 = 'ciao';

let stringa2 = 'come stai';

let comparison;

if(stringa1 == stringa2){
    comparison = 'Uguale';
}
else{
    comparison = 'Diverso';
}

console.log(comparison);

// *****Esercizio 3.2*****
let num = 3;

let compara;

if(num == '3'){
    compara = true;
}
else{
    compara = false;
}

console.log(compara);

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
const numbers = [1,2,3,4,5,6,7,8];
console.log(numbers);

// *****Esercizio 2/array***** 
const fruits = ['mela', 'banana', 'pesca', 'pera', 'albicocca', 
'mango', 'kiwi', 'papaya'];
console.log(fruits);

// *****Esercizio 3/array***** 
console.log(fruits.length);