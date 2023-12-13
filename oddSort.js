//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
let array=[2,1];

function sort(array){
    for(let i=3;i<array.length;i+=2){
        let tmp=array[i];
        let j=i-2;

        while(j>=0 && array[j]>tmp){
            array[j+2]=array[j];
            j-=2;
        }

        array[j+2]=tmp
    }
}

sort(array);
console.log(array);