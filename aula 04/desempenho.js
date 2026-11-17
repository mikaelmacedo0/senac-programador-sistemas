const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite a nota: ", (nota)=>{

    if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Recuperação")
}
readline.close();
});






