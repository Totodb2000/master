/*Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21*/


let numeroRomano = 'MC';
let numeriRomani = new Map([['I', 1],
    ['V', 5],
    ['X',10],
    ['L',50],
    ['C',100],
    ['D',500],
    ['M',1000]
]
);

function numeroDecimaele(numeroRomano,numeriRomani) {
    let res=0;

    for(let i=0;i<numeroRomano.length;i++){
        let current=numeriRomani.get(numeroRomano[i]);
        let next=numeriRomani.get(numeroRomano[i+1]);

        
        if(numeroRomano[i]==numeroRomano[i+1] && numeroRomano[i+1]==numeroRomano[i+2] && numeroRomano[i+2]==numeroRomano[i+3]){
            throw new Error("Not Valid")
        }
            
       
        if (next && current < next) {
            res += (next - current);
            i++;
        } 
        else {
            res += current;
        }
    }
    return res;
}

let decimale = numeroDecimaele(numeroRomano,numeriRomani);
console.log(decimale);
