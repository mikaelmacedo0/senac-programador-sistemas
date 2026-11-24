//1. Situação-problema

/***************************************************************************************************
Uma loja deseja conferir o valor de uma compra e verificar se o cliente pode receber frete grátis.
Você criará um programa no terminal que solicita o preço unitário, a quantidade de produtos e se o
cliente participa do programa de fidelidade.*/

//2. Regras do sistema
/****************************************************************************************************
• Calcular o subtotal: preço × quantidade.
• Aplicar desconto de 10% se a quantidade for igual ou superior a 5 unidades. Caso contrário,
desconto zero.
• Calcular o total após o desconto.
• Conceder frete grátis quando o total for maior ou igual a R$ 100,00 OU quando o cliente for
fidelizado E o total for maior ou igual a R$ 60,00.
• Mostrar subtotal, desconto, total e se o frete é grátis.
Objetivo didático: utilizar +, -, *, /, >=, ===, &&, || e parênteses. O uso de if/else nesta resolução é
uma introdução guiada à próxima aula; o foco avaliativo permanece nos operadores e nas
expressões.

//3. O que entregar
/******************************************************************************************************
• Arquivo compra.js executável no Node.js, dentro de um repositório GitHub.
• Captura ou transcrição dos resultados de pelo menos três testes.
• Resposta curta: por que usamos parênteses na regra do frete?

//4. Antes de programar: planeje
/*******************************************************************************************************
Entradas: preço, quantidade e fidelidade (sim/não). Processamento: subtotal, desconto, total e
condição lógica para o frete. Saídas: resumo da compra e mensagem sobre frete.
*/



const readline = require('node:readline'); // Importa o recurso de leitura do terminal.
const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); // Prepara perguntas e
respostas.
rl.question('Preço unitário (ex.: 25.50): ', (textoPreco) => { // Solicita o preço do produto.
rl.question('Quantidade de unidades: ', (textoQuantidade) => { // Solicita a quantidade.
rl.question('Cliente fidelizado? (sim/nao): ', (textoFidelidade) => { // Solicita a fidelidade.
const preco = Number(textoPreco); // Converte o preço digitado em número.
const quantidade = Number(textoQuantidade); // Converte a quantidade em número.
const fidelizado = textoFidelidade.trim().toLowerCase() === 'sim'; // Compara a resposta com 'sim'.
const entradasValidas = Number.isFinite(preco) && preco > 0 && Number.isInteger(quantidade) && quantidade
> 0; // Confere valores válidos.
if (!entradasValidas) { // Verifica se algum valor informado é inválido.
console.log('Erro: informe preço positivo e quantidade inteira positiva.'); // Explica o erro.
} else { // Continua quando as entradas são válidas.
const subtotal = preco * quantidade; // Multiplica preço pela quantidade.
const temDesconto = quantidade >= 5; // Verifica se a compra alcança cinco unidades.
const desconto = temDesconto ? subtotal * 0.10 : 0; // Calcula 10% ou zero de desconto.
const total = subtotal - desconto; // Subtrai o desconto do subtotal.
const freteGratis = (total >= 100) || (fidelizado && total >= 60); // Combina as regras do frete.
console.log('Subtotal: R$ ' + subtotal.toFixed(2)); // Exibe o subtotal com duas casas.
console.log('Desconto: R$ ' + desconto.toFixed(2)); // Exibe o desconto calculado.
console.log('Total: R$ ' + total.toFixed(2)); // Exibe o total final.
console.log('Frete grátis: ' + (freteGratis ? 'SIM' : 'NÃO')); // Informa o resultado lógico.
} // Encerra a verificação das entradas.
rl.close(); // Fecha a leitura do terminal.
}); // Encerra a pergunta sobre fidelidade.
}); // Encerra a pergunta sobre quantidade.
}); // Encerra a pergunta sobre preço.