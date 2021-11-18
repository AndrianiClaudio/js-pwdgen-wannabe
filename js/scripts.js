// costante: "21"
const secretNumber = 21;
// Chiedo il nome all'utente e salvo in una variabile*/
let firstName = prompt('Inserisci il tuo nome');
console.log(firstName);
// Chiedo il cognome all'utente e salvo in una variabile*/
let surname = prompt ('Inserisci il tuo cognome');
console.log(surname);
// Chiedo il colore preferito all'utente e salvo in una variabile*/
let userColor = prompt ('Inserisci il tuo colore preferito');
console.log(userColor);
// Scrivo sulla pagina nome+cognome+colorepreferito+21
console.log(`${firstName}${surname}${userColor}${secretNumber}`);
document.writeln(`${firstName}${surname}${userColor}${secretNumber}`);
document.getElementById('pass-print').innerHTML = `${firstName}${surname}${userColor}${secretNumber}`;