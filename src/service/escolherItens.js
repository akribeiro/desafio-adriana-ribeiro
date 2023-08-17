export function escolherItens (itens) {
    return itens.map((item) => {
        const [itensCardapio] = item.split(",");

        return itensCardapio;
    });
}