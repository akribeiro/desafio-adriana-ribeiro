export function validarPagamento(tipoPagamento) {
    if(formasPagamentoValidas.includes(tipoPagamento)) {
        return true
    }
    return false
}