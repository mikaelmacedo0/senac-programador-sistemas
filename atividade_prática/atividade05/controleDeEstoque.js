    let produtos = ["Monitor","Mouse", "Teclado", "Webcam" ];
    let estoque = [4, 12, 7, 2];


    console.log("_______________________________________________________________________________________")
    console.log("1 - Exibindo a lista inicial: indice, nome e quantidade");
    console.log("_______________________________________________________________________________________")
        for (let i = 0; i < produtos.length;i++) {
            console.log(`Indice: ${i} - Nome: ${produtos[i]} - Quantidade: ${estoque[i]}  `)
        }
    let produto = "Mouse"
        if (produtos.includes(produto)) {
            console.log("Produto "+produto+" já cadastrado!")
        } else {
        console.log("Produto não encontrado.")
    }
    console.log("_______________________________________________________________________________________")   
    console.log("2 - Cadastrando Headset usando o push e 9 na quantidade");
    console.log("_______________________________________________________________________________________")
    produtos.push('Headset');
    estoque.push(9)
    console.log("Foi adicionado Headset na lista, com 9 unidades")
    console.log(produtos)
    console.log(estoque)

    console.log("_______________________________________________________________________________________")
    console.log("3 - Localizando o teclado usando o indexOF() e alterado para 10")
    console.log("_______________________________________________________________________________________")
    let posicao = produtos.indexOf("Teclado");
        if (posicao !== -1) {    
            console.log("Item "+produtos[posicao]+" encontrado");
        } else {
            console.log("Item não encontrado");
        }

    estoque[posicao] = 10;
    console.log("Foi adicionado "+estoque[posicao]+" na posição de teclado")

    console.log("___________________________________________________________________________________________")
    console.log("4 - Simulando a retirada do último item com pop() nos dois Arrays e nos dois primeiros com shift()")
    console.log("___________________________________________________________________________________________")
    let primeiroProduto = produtos.shift();
    let primeiroEstoque = estoque.shift();
    let ultimoProduto = produtos.pop();
    let ultimoEstoque = estoque.pop();
    
    console.log("Primeiro produto removido - "+primeiroProduto)
    console.log("Primeiro unidade removida - "+primeiroEstoque)
    console.log("Último produto removido - "+ultimoProduto)
    console.log("Última unidade removida - "+ultimoEstoque)
    console.log(produtos)
    console.log(estoque)

    console.log("___________________________________________________________________________________________")
    console.log("5 - Cadastrando novamente Monitor com 4 unidades e Headset com 9 unidades")
    console.log("___________________________________________________________________________________________")
    posicao = produtos.indexOf("Monitor");
        if (posicao !== -1) {    
            console.log("Item "+produtos[posicao]+" encontrado");
        } else {
            console.log("Item não encontrado");
            produtos.push("Monitor")
            estoque.push(4)
        } 
        
        posicao = produtos.indexOf("Headset")
        if (posicao !== -1){
            console.log("Item "+produtos[posicao]+" encontrado");
        } else {
            console.log("Item não encontrado");
            produtos.push("Headset");
            estoque.push(9);
        }

    console.log("Foram adicionados Monitor e Headset")
    console.log(produtos)
    console.log(estoque)

    console.log("___________________________________________________________________________________________")
    console.log("6 - Relatório com for menor que 5 = Repor, 5 até 10 = Atenção, acima de 10 = Normal")
    console.log("___________________________________________________________________________________________")
        for (let i = 0; i < produtos.length;i++) {
    
            if(estoque[i]<5){
                console.log("Repor urgente: "+produtos[i])
            } else if(estoque[i]>5 && estoque[i]<=10) {
                console.log("Atenção ao produto: "+produtos[i])
            } else {
                console.log("Quantidade normal: "+produtos[i])
            }
        }


