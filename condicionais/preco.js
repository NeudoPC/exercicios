// Preço com base na distancia, preço da gasolina ou de etanol.

const etanol = 2;
const gasolina = 2.64;
const tipoCombustivel = "etanol";
const KmPorLitro = 15; //15km por litro
const DistanciaKM = 1500;
const quantidadeLitros = DistanciaKM/ KmPorLitro;
if (tipoCombustivel==="gasolina") {
    valorViagem = quantidadeLitros * gasolina;
    console.log("R$",valorViagem.toFixed(2));
} else if (tipoCombustivel==="etanol") {
            valorViagem = quantidadeLitros * etanol;
            console.log("R$", valorViagem.toFixed(2))
} else {
    console.log("digite um valor valido seja etanol ou gasolina.");
}