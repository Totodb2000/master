/*
Consecutive strings
You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples

strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz". The first that came is "folingtrashy" so:

longest_consec(strarr, 2) → "folingtrashy"

In the same way:

longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) → "abigailtheta"

Note: n being the length of the string array, if n = 0 or k > n or k <= 0 return ""


*/

let array=['Totò','Tony','Giada','Benny','Davide','Manfredi','Maria'];
let k=2;

function maxString(array,k){
    let tmp;
    tmp='';
    for(let i=0;i<array.length-k+1;i++){
        let current=array[i];
        for(let j=1;j<k;j++){
            current+=array[i+j];
        }
        if(tmp.length<current.length) {
            tmp=current; 
        }
    }
    return tmp;
}

console.log(maxString(array,k));