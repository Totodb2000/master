/*Implementare l’algoritmo Binary Search.

L'algoritmo cerca un elemento all'interno di un array, che deve necessariamente essere ordinato in ordine crescente, effettuando mediamente meno confronti rispetto ad una ricerca sequenziale. L'idea è quella di iniziare la ricerca non dal primo elemento, ma da quello centrale, cioè a metà dell’array. Si confronta questo elemento con quello cercato:

●	se corrisponde, la ricerca termina indicando che l'elemento è stato trovato;
●	se è superiore, la ricerca viene ripetuta sugli elementi precedenti (ovvero sulla prima metà del dizionario), scartando quelli successivi;
●	se invece è inferiore, la ricerca viene ripetuta sugli elementi successivi (ovvero sulla seconda metà del dizionario), scartando quelli precedenti.

Se si arriva al punto in cui tutti gli elementi vengono scartati, la ricerca termina indicando che il valore non è stato trovato.*/

let array=[4,85,95,1,63,46,12,7,3,50,54];
let key =3;

function insertionSort(array){
    for(let i=1;i<array.length;i++){
        let flag=array[i];
        let j=i-1;

        while(j>=0 && array[j]>flag){
            array[j+1]=array[j]
            j--;
        }

        array[j+1]=flag;
    }
}

insertionSort(array);

function binarySearch(array, key) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        let mid = ((low + high) / 2 | 0);
        let guess = array[mid];

        if (guess === key) {
            return mid; // Elemento trovato, restituisce l'indice
        } else if (guess < key) {
            low = mid + 1; // Cerca nella metà destra dell'array
        } else {
            high = mid - 1; // Cerca nella metà sinistra dell'array
        }
    }

    return -1; // Elemento non trovato
}

let result = binarySearch(array, key);

if (result !== -1) {
    console.log(`L'elemento ${key} si trova all'indice ${result}.`);
} else {
    console.log(`L'elemento ${key} non è presente nell'array.`);
}