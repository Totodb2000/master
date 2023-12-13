/*Implementare una funzione che data una stringa contenente parentesi di diverso tipo (graffe, quadre e tonde), verifichi che esse siano annidate correttamente e che non ci siano parentesi lasciate “aperte” (senza la corrispettiva parentesi di chiusura)

Ad esempio,

{ ( 12 + 5 } )

non è valida perchè la parentesi graffa viene chiusa prima che venga chiusa la tonda.*/

let frase="{}[(])";

function isValid(frase){
    let graffeAperte=0;
    let quadreAperte=0;
    let tondeAperte=0;

    if((frase[0]==')' || frase[0]==']' || frase[0]=='}') || (frase[frase.length-1]=='(') || (frase[frase.length-1]=='[') || (frase[frase.length-1]=='{')){
        return false;
    }

    for(let char of frase){
        if(char=='{'){
            if(tondeAperte>0 || quadreAperte>0){
                return false;
            }
            graffeAperte++;
        }
        else if(char=='['){
            if(tondeAperte>0){
                return false;
            }
            quadreAperte++;
        }
        else if(char=='('){
            tondeAperte++;
        }
        else if(char=='}'){
            if(graffeAperte===0 || quadreAperte>0 || tondeAperte>0){
                return false;
            }
            graffeAperte--;
        }
        else if(char==']'){
            if(quadreAperte===0 || tondeAperte>0 ){
                return false;
            }
            quadreAperte--;
        }
        else if(char==')'){
            if(tondeAperte===0){
                return false;
            }
            tondeAperte--;
        }
    }

    return tondeAperte===0 &&quadreAperte===0 && graffeAperte===0;
}

console.log(isValid(frase));