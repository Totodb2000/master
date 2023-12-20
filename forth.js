/*Implementare un programma in grado di valutare un’espressione scritta utilizzando un subset del linguaggio Forth, un linguaggio di programmazione basato su stack.

Il programma deve supportare dati di tipo intero e le seguenti word di Forth:

●	+, -, *, / (operatori su interi)
○	+: somma i due elementi in cima allo stack e li rimpiazza con il risultato (es. 3 4 + diventa 7)
○	*: moltiplica i due elementi in cima allo stack e li rimpiazza con il risultato (es. 3 4 * diventa 12)
○	-: sottrae l’elemento in cima allo stack a quello precedente e li rimpiazza con il risultato (es. 10 3 - diventa 7)
○	/: divide l’elemento precedente a quello  in cima allo stack per quello in cima e li rimpiazza con il risultato (es. 10 5 / diventa 2)
●	DUP, DROP, SWAP, OVER, ROT (manipolazione dello stack)
○	DUP: duplica l’elemento in cima allo stack e mette la copia in cima
○	DROP: elimina l’elemento in cima allo stack
○	SWAP: scambia i due elementi in cima allo stack
○	OVER: duplica l’elemento precedente a quello in cima allo stack e mette la copia in cima
○	ROT: porta il terzo elemento dello stack (partendo dalla cima) in cima allo stack (es. a, b, c diventa b, c, a)

Ad esempio:

3 4 + 10 *     →   70
3 DUP *        →   9
3 4 OVER + *   →   21

Extra

Aggiungere supporto per funzioni custom (definite nel linguaggio di programmazione utilizzato per implementare il programma)

function POW(stack) {
    …
}

3 POW   →   9*/

let expression="3 4+10*16+";

function Forth(expression) {
    const stack = [];
    let currentNumber = '';
  
    for (let i = 0; i < expression.length; i++) {
      let currentChar = expression[i];
  
      if (/[0-9]/.test(currentChar)) {
        currentNumber += currentChar;
      } else {
        if (currentNumber !== '') {
          stack.push(parseInt(currentNumber, 10));
          currentNumber = '';
        }
        switch (currentChar) {
          case '+':
            stack.push(stack.pop() + stack.pop());
            break;
          case '*':
            stack.push(stack.pop() * stack.pop());
            break;
          case '-':
            const b = stack.pop();
            const a = stack.pop();
            stack.push(a - b);
            break;
          case '/':
            const divisor = stack.pop();
            const dividend = stack.pop();
            stack.push(Math.floor(dividend / divisor));
            break;
          default:
            break;
        }
      }
    }

    if (stack.length !== 1) {
      throw new Error('Invalid expression');
    }
  
    return stack[0];
  }
  
console.log(Forth(expression));