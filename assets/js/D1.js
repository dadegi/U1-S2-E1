/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
STRING: variabile con elementi di testo raccontati con le virgolette doppie ("") o con gli apici ('');
NUMBER: variabile con elementi numerici, interi o decimalli;
BOOLEAN: variabile con un valore vero (true) o falso (false);
NULL: variabile INTENZIONALMENTE senza un valore;
UNDEFINED: variabile senza un valore, che acquisirà un valore successivamente
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myName = 'Dario';
console.log('----- Esercizio 2 -----');
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Soluzione 1
let sum = 12 + 20;
console.log('----- Esercizio 3 soluzione 1 -----');
console.log(sum);

// Soluzione 2
let num1 = 12;
let num2 = 20;
let sum2 = num1 + num2;
console.log('----- Esercizio 3 soluzione 2 -----');
console.log(sum2);

// Soluzione 3
console.log('----- Esercizio 3 soluzione 3 -----');
console.log(num1 + num2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Soluzione 1
let x;
x = 12;
console.log('----- Esercizio 4 soluzione 1 -----');
console.log(x);

// Soluzione 2
let x2 = 12;
console.log('----- Esercizio 4 soluzione 2 -----');
console.log(x2);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myName = 'Del Giudice';
console.log('----- Esercizio 5 -----');
console.log(myName);

const myConst = 'Pippo';
console.log(myConst);
// myConst = 'Paperino'; // Genera un errore di ridefinizione del valore di una costante

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sottrazione = x - 4;
console.log('----- Esercizio 6 soluzione 1 -----');
console.log(sottrazione);

let num3 = 4;
let sottrazione2 = x - num3;
console.log('----- Esercizio 6 soluzione 2 -----');
console.log(sottrazione2);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = 'John';
let name2 = 'john';

const verify =
	name1 !== name2 ? 'name1 è diverso da name2' : 'name1 è identico a name2';
console.log('----- Esercizio 7 parte 1 -----');
console.log(verify);

name1 = name1.toLowerCase();
name2 = name2.toLowerCase();

const verify2 =
	name1 !== name2 ? 'name1 è diverso da name2' : 'name1 è identico a name2';
console.log('----- Esercizio 7 parte 2 -----');
console.log(verify2);
