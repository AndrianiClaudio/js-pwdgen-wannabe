//Inserimento studenti di una classe e relativi voti di maturitá
//Calcolo media voto classe
let votes = [];
let students = [];
//simulazione (test: classe di 3 studenti)
const studentNum = 3;
for (let i = 0; i < studentNum; i++) {
    //richiesta nome
    let studentName = prompt('Inserire nome '+(i+1));
    students[i] = studentName;
    //richiesta voto
    let studentVote = prompt('Inserire voto '+(i+1));
    votes[i] = parseInt(studentVote);
    // stampa i-esimo studente
    document.getElementById('student-data').innerHTML += '<span>Studente ' + (i + 1) + '</span><br>'+`
    <h4>Nome: ${studentName} - Voto: ${studentVote}</h4>
    `;
    //memorizza voto
}
// definizione variabile somma
let sum  = 0;
for (let i = 0; i < studentNum; i++) {
    sum += votes[i];
}
// definizione variabile media
let mean;
// controlla se voto con o senza virgola
if (sum % studentNum == 0) {
    mean = sum / studentNum;
}
else {
    mean = (parseFloat(sum) / studentNum).toFixed(2);
}
// stampa media
document.getElementById('media-print').innerHTML = '<span> Media classe: '+ mean + '</span>';