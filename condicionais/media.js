/*Media das notas de um aluno caso tire algo abaixo de 5 é reprovado imediatamente
caso tire entre algo acima de 5 ou algo menor ou igual a 7 fica de recuperação e caso tire acima é aprovado.
*/
const nota1 = 10;
const nota2 = 2;
const nota3 = 9;
const media = (nota1+nota2+nota3)/3;

if (media<5) {
    console.log("Reprovado", media.toFixed(2))
} else if (media>=5 && media<=7) {
    console.log("Recuperação", media.toFixed(2))
} else if (media>7 && media<=10) {
    console.log("Aprovado", media.toFixed(2))
} else {
    console.log("Digite um valor valido")
}