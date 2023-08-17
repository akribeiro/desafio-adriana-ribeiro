export function aplicar_acrescimo(valorCompra, formaPagamento) {
    if (formaPagamento === "credito") {
        return valorCompra * 1.03
    }
    return valorCompra
}