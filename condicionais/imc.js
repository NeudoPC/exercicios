//IMC para medir gordura corporal desde abaixo do peso, peso normal, acima do peso/sobrepeso, obeso e obesidade grave.
altura = 1.63;
peso = 800;
imc = peso/(altura**2);

if (imc<18.5) {
    console.log("Abaixo do peso", imc.toFixed(2, "IMC"))
} else if (imc>=18.5 && imc<25) {
    console.log("Peso normal", imc.toFixed(2), "IMC")
} else if (imc>=25 && imc<30) {
    console.log("Acima do peso", imc.toFixed(2), "IMC")
} else if (imc>=30 && imc<40) {
    console.log("Obeso")
} else {
    console.log("Obesidade Grave", imc.toFixed(2), "IMC")
};