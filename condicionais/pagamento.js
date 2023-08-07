//Formas de pagamento com desconto ou juros.

const valorProduto = 100;
const formaDePagamento = "Acima2xNoCartão";
let  comDesconto = 0;
if (formaDePagamento==="Debito") {
    comDesconto = valorProduto - (valorProduto*0.1)
    console.log(comDesconto);
}else if (formaDePagamento==="DinheiroOuPix") {
    comDesconto = valorProduto - (valorProduto*0.15)
    console.log(comDesconto);
} else if (formaDePagamento==="2xNoCartão") {
    console.log(comDesconto);
} else if (formaDePagamento==="Acima2xNoCartão") {
    comDesconto = valorProduto + (valorProduto*0.1)
    console.log(comDesconto)
}