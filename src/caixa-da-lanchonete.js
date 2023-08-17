import { aplicar_acrescimo } from './service/aplicar_acrescimo';
import { aplicar_desconto } from './service/aplicar_desconto';
import { totalValorCompra } from './service/totalValorCompra';
import { validarPagamento } from './service/validarPagamento';
import { validarItensCardapio } from './service/validarItensCardapio';


class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        if(!validarPagamento (metodoDePagamento)) {
            return "Forma de pagamento inválida!"
        }

        const itensErrados = validarItensCardapio (itens);
        
        if (itensErrados) {
            return itensErrados
        }

        const totalDeItens = totalValorCompra (itens);

        totalDeItens = aplicar_acrescimo(totalDeItens, metodoDePagamento) 
        totalDeItens = aplicar_desconto(totalDeItens, metodoDePagamento)
        
        
        return 'R$ ${totalDeItens.toFixed(2).replace(".",",")}'
    }

}

export { CaixaDaLanchonete };
