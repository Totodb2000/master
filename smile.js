/*Smiles
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]*/

let array=[':-)','a',':-D',':D','f'];
let face=[':-D',':-)',':D',';-D',';-)'];

function numSmile(array,face){
    let char;
    let res=0;
    

    for(let i=0;i<array.length-1;i++){
        char=array[i]
        if(face.includes(char)){
            res++;
        }
     }
    return res;
    }

let r=numSmile(array,face);
console.log("nell'array sono presenti",r,"smile");