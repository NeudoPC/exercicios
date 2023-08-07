const precoCombustivel = 2.56;
const kmPorLitro = 15; //15 km por litro
const distanciaKM = 50;

const quantidadeLitros = distanciaKM/kmPorLitro;
const valorViagem = quantidadeLitros * precoCombustivel;
console.log( "R$",valorViagem.toFixed(2));