export const validarItensCardapio = (itens) => {
        if(!Array.isArray(itens)) {
        return "Não há itens no carrinho de compra!"
        }


    if (itens.length === 0) {
        return "Não há itens no carrinho de compra!"
    }

    let erro;
    let mensagem;

    itens.forEach(item => {
        if (typeof item !== 'string') {
            erro = "Item inválido!"
        return
        }
    })

    if (produto.indexOf (",") === -1) {
        erro = "Item inválido!"
    return
    }

const [descricaoItem, quantidadeItem] = item.split(",")

    if (!itensDoCardapio.includes(descricaoItem)) {
     erro = "Item inválido!"
    }

    if (isNaN (quantidadeItem) || +quantidadeItem === 0) {
        erro = "Quantidade inválida!"
    }

    if (descricaoItem === "sanduiche" && !descricaoItem.includes("queijo")) {
        erro = "Item extra não pode ser pedido sem o principal"
    }

    if (descricaoItem === "chantily" && !descricaoItem.includes("cafe")) {
        erro = "Item extra não pode ser pedido sem o principal"
    }

    if (isNaN (quantidadeItem) || +quantidadeItem === 1 ||+quantidadeItem) {
        mensagem = "Item a mais incluído!"
    }

const [tipoPagamento] = tipoPagamento.split(",")
    
    if (tipoPagamento === "cheque" || tipoPagamento === "pix") {
        erro = "Forma de pagamento inválida!"
    }
        
    return erro
}



