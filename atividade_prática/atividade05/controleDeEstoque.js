let produtos = ["Monitor","Mouse", "Teclado", "Webcam" ];
let estoque = [4, 12, 7, 2];



//1 - Exibindo a lista inicial: indice, nome e quantidade
for (let i = 0; i < produtos.length;i++) {
        console.log(`Indice: ${i} - Nome: ${produtos[i]} - Quantidade: ${estoque[i]}  `)

    }
let produto = "Mouse"
if (produtos.includes(produto)) {
    console.log("Produto "+produto+" já cadastrado!")
} else {
    console.log("Produto não encontrado.")
}   
//2 - Cadastrando Headset usando o push e 9 na quantidade
    produtos.push('Headset');
    estoque.push(9)
    console.log("Foi adicionado Headset na lista, com 9 unidades")
    console.log(produtos)
    console.log(estoque)
    
    
  /* for (let i = 0; i < produtos.length;i++) { 
        let posicao = produtos.indexOf("Teclado");
        if (posicao !== -1) {    
            estoque(posicao) = 10;
            console.log(estoque);
        }    
   }*/
