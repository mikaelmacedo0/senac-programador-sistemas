// Importa o módulo de leitura do terminal, já incluído no Node.js.
const readline = require('node:readline');
// Cria a interface que recebe e apresenta mensagens no terminal.
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
// Define uma função para fazer perguntas e aguardar as respostas.
function perguntar(texto) {
// Retorna uma promessa que termina quando o usuário responde.
return new Promise((resolver) => rl.question(texto, resolver));
}
// Define a função principal do programa.
async function iniciar() {
// Apresenta o menu da papelaria.
console.log('=== PAPELARIA ===\n1 - Caderno (R$ 20,00)\n2 - Caneta (R$ 5,00)\n3 - Sair');
// Solicita a opção e transforma o texto recebido em número.
const opcao = Number(await perguntar('Escolha uma opção: '));
// Prepara as variáveis que receberão os dados do produto.
let produto = '';
// Prepara o preço inicial do produto.

let preco = 0;
// Seleciona uma ação conforme a opção informada.
switch (opcao) {
// Trata a opção de compra de caderno.
case 1:
// Define o nome do produto escolhido.
produto = 'Caderno';
// Define o preço unitário do caderno.
preco = 20;
// Encerra este caso do switch.
break;
// Trata a opção de compra de caneta.
case 2:
// Define o nome do produto escolhido.
produto = 'Caneta';
// Define o preço unitário da caneta.
preco = 5;
// Encerra este caso do switch.
break;
// Trata a opção de sair do atendimento.
case 3:
// Exibe a mensagem de encerramento.
console.log('Atendimento encerrado');
// Encerra a função principal sem pedir mais dados.
return;
// Trata opções que não estão no menu.
default:
// Informa que a opção escolhida não existe.
console.log('Opção inválida');
// Encerra a função principal.
return;
}
// Pergunta a quantidade e converte a resposta em número.
const quantidade = Number(await perguntar('Quantidade: '));
// Verifica se a quantidade não é um inteiro positivo.
if (!Number.isInteger(quantidade) || quantidade <= 0) {
// Informa o erro na quantidade.
console.log('Quantidade inválida');
// Encerra o programa antes dos cálculos.
return;
}
// Pergunta sobre fidelidade, retira espaços e converte para maiúsculas.
const resposta = (await perguntar('Cliente fidelidade? (S/N): ')).trim().toUpperCase();
// Rejeita respostas diferentes de S e N.
if (resposta !== 'S' && resposta !== 'N') {
// Informa que a resposta de fidelidade não foi aceita.
console.log('Fidelidade inválida: digite S ou N');
// Encerra a função sem calcular a compra.
return;
}
// Identifica se o cliente possui fidelidade.
const fidelidade = resposta === 'S';
// Calcula o valor da compra antes de qualquer desconto.
const subtotal = preco * quantidade;
// Começa com desconto de zero por cento.
let percentual = 0;
// Aplica 15% quando as duas condições são verdadeiras.
if (fidelidade && subtotal >= 100) {
// Define a taxa de desconto de quinze por cento.
percentual = 15;
// Verifica se ao menos uma condição é verdadeira.
} else if (fidelidade || subtotal >= 100) {
// Define a taxa de desconto de cinco por cento.
percentual = 5;
// Trata compras que não atendem às regras de desconto.
} else {
// Mantém a taxa de desconto em zero.
percentual = 0;
}
// Calcula o valor em reais a ser descontado.
const valorDesconto = subtotal * percentual / 100;
// Calcula o total final depois do desconto.
const total = subtotal - valorDesconto;

// Seleciona uma mensagem curta com o operador ternário.
const mensagem = percentual > 0 ? 'Desconto aplicado' : 'Sem desconto';
// Mostra o produto comprado.
console.log('Produto:', produto);
// Mostra quantas unidades foram compradas.
console.log('Quantidade:', quantidade);
// Mostra o subtotal com duas casas decimais.
console.log('Subtotal: R$', subtotal.toFixed(2));
// Mostra a taxa percentual aplicada.
console.log('Desconto:', percentual + '%');
// Mostra o valor descontado em reais.
console.log('Valor descontado: R$', valorDesconto.toFixed(2));
// Mostra o total a pagar.
console.log('Total final: R$', total.toFixed(2));
// Mostra a mensagem criada pelo ternário.
console.log(mensagem);
}
// Executa a função principal e fecha a leitura ao terminar.
iniciar().finally(() => rl.close());