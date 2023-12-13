/*Write a function that takes a string and replace every letter with its position in the alphabet.

"a" = 1, "b" = 2, …

If anything in the text isn't a letter, ignore it and don't return it.

Example

alphabet_position("The sunset sets at twelve o' clock.")  → "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"*/
let alfabeto=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let parola='ciao un bacio';

function posizione(parola,alfabeto){
    let result=[];
    let char;
    for(let i=0;i<parola.length;i++){
        char=parola.charAt(i);
        if(alfabeto.includes(char)){
            result.push(alfabeto.indexOf(char)+1);
        }
    }
    return result;
}

let valore=posizione(parola,alfabeto);
console.log(valore);