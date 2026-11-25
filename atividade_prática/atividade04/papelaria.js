//etapa 1 - Criar, acessar e modificar lista
console.log('Etapa 1')
console.log('--------------------------------------')
let materiais = ["Caderno","Lápis","Régua", "Cola"]
console.log(materiais[0]);
materiais[1] = "Caneta";
materiais.push("Borracha", "Tesoura");
console.log(materiais.length);

//etapa 2 - Remover, buscar e ordenar
console.log('Etapa 2')
console.log('--------------------------------------')
console.log(materiais.pop());
console.log(materiais.shift()); // remove o primeiro elemento do array
let posição = materiais.indexOf("Régua"); // retorna a posição do elemento no array
if (posição !== -1) {
    materiais.splice(posição, 1); // remove o elemento do array
}
console.log(materiais.includes("Cola")); // verifica se o elemento está no array
console.log(materiais.includes("Mochila"));
materiais.sort(); // ordena o array em ordem alfabética
for (let i = 0; i < materiais.length; i++) {
    console.log(i, materiais[i]); // exibe o índice e o elemento do array
}

//Calcular e classificar compras
console.log('Etapa 3')
console.log('--------------------------------------')
const compras = [12, 8, 20, 10]
let total = 0;
for (let i = 0; i < compras.length; i++) {
    total += compras[i];
    if (compras[i] < 10 && compras[i] <= 20) {
        console.log(`compras[${i}], Na faixa`)   
    } else {
        console.log(`compras[${i}], Fora da faixa`)
    }
}