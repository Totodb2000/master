//avendo in input una quantità discreta di denaro e un array di interi contenente i tagli delle banconote, 
//restituire una sequenza di interi, che rappresentano il cambio della quantità di denaro iniziale nei tagli disponibili. Attenzione, 
//bisogna tentare di minimizzare la quantità di banconote restituita

let somma=540;
let tagli=[500,200,100,50,20,10,5,2,1,0.50,0.20,0.10,0.05,0.02,0.01];

function max(somma,tagli){
    let res;
    let i=0

    while(tagli[i]>somma){
        i++;
    }
    res=tagli[i];

    return res;
}

function prelievo(somma,tagli){
    let res=[];

    while(somma>0){
        let maxtaglio=max(somma,tagli);
        somma-=maxtaglio
        res.push(maxtaglio);
    }

    return res;
}

console.log(prelievo(somma,tagli));