/*Valid Parentheses
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples

"()"              →  true
")(())("          →  false
"("               →  false
"(())((()())())"  →  true*/

let frase="()(()())";
function isValid(frase){
    let aperte=0;

    if((frase[0]==')') || (frase[frase.length-1]=='(')){
        return false;
    }

    for(let i of frase){
        if(frase[i]=='('){
            aperte++;
        }
        else if (frase[i] === ')') {
            if (aperte === 0) {
                return false;
            }
            aperte--;
        }
    }

    return aperte === 0;  
}

console.log(isValid(frase));