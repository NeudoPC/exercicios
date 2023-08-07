//entendendo o que é um boolean ou tipo logico vendo se um numero pode ser dividido por 5.
const numero = 0;
const numeroDivisivelpor5 = (numero%5) ===0;
if (numero===0) {
    console.log("invalido")
} 
else if (numeroDivisivelpor5) {
    console.log("sim")
} 
 else {
    console.log("não")
}