/*Implementare una funzione che date due stringhe restituisca la più lunga sequenza in comune.

lcs(“oggi nevica poco”, “sta arrivando il capo”) → “capo”

Nota: non considerare gli spazi*/

let frase1="oggi nevica poco";
let frase2="sta arrivando il capo";

function longestCommonString(frase1,frase2){
    let risultato = "";
    let lunghezzaMassima = 0;

    frase1 = frase1.replace(/\s/g, '');
    frase2 = frase2.replace(/\s/g, '');

    // Itera su ogni coppia di caratteri delle due frasi
    for (let i = 0; i < frase1.length; i++) {
        for (let j = 0; j < frase2.length; j++) {
            let lunghezzaCorrente = 0;       

            // Trova la lunghezza della stringa comune
            while (i + lunghezzaCorrente < frase1.length &&
                   j + lunghezzaCorrente < frase2.length &&
                   frase1[i + lunghezzaCorrente] === frase2[j + lunghezzaCorrente]) {
                lunghezzaCorrente++;
            }

            // Se troviamo una stringa comune più lunga, aggiorniamo il risultato
            if (lunghezzaCorrente > lunghezzaMassima) {
                lunghezzaMassima = lunghezzaCorrente;
                risultato = frase1.substring(i, i + lunghezzaCorrente);
            }
        }
    }

    return risultato;
}

console.log(longestCommonString(frase1,frase2));