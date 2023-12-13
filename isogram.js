/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
Example: (Input --> Output)
"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)*/

let parola="ciao";

function isIsogram(parola){
    let occorrenze=[];
    let counter=0;

    for(char of parola){
        if(occorrenze.includes(char)){
            return false;
        }
        else{
            counter++;
        }
        occorrenze.push(char);
    }

    return counter===parola.length;
    
}

console.log(isIsogram(parola));


