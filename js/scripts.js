// const secretNumber = 21;
// Chiedo il nome all'utente e salvo in una variabile*/
let firstName = prompt('Inserisci il tuo nome');
console.log(firstName);
// Chiedo il cognome all'utente e salvo in una variabile*/
let surname = prompt ('Inserisci il tuo cognome');
console.log(surname);
// Chiedo il colore preferito all'utente e salvo in una variabile*/
let bestColor = prompt ('Inserisci il tuo colore preferito');
console.log(bestColor);
// Chiedo il numero preferito all'utente e salvo in una variabile*/
let bestNum = parseInt(prompt('Inserisci il tuo numero preferito'));
console.log(bestNum);
// numero preferito + 5
let sum = bestNum + 5;
// Creo la password
let password = `${firstName}${surname}${bestColor}${sum}`;
console.log(password);
document.writeln(password);
document.getElementById("pass-print").innerHTML = password;
// Scrivo sulla pagina la password