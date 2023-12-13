/*Write a function that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

Examples

39 → 3 (3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 → 4 (9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 → 0 (4 is already a one-digit number)*/


let number=333;

function persistance(number){
    let res=0;

    while(number>=10){
        let product=1;
        let cifre=number.toString();

        for(let i of cifre){
            product *=parseInt(i);
        }
        number=product;
        res++;

    }
    return res;
}

let res=persistance(number);
if(res===0){
    console.log("il numero è già a una cifra");
}
else{
    console.log('il numero ha persistenza moltiplicativa pari a',res);
}