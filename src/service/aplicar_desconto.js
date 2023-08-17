export function aplicar_desconto = (valorCompra, tipoPagamento) {
    if(tipoPagamento === "dinheiro"){
        return valorCompra *0.95
    }
    return valorCompra
}