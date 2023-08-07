//descobrir se um número é par ou impar.
const numero = 3;
const numeroPar = (numero%2) === 0;
console.log(numeroPar)

if (numeroPar) {
    console.log("Par")
} else {
    console.log("negação do jeito mais simples")
}
if (!numeroPar) {
    console.log("Impar")
}