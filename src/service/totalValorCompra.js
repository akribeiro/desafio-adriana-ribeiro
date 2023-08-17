export const totalValorCompra = (itens) => {
    let valorFinal = 0;

 itens.forEach((item) => {
    const [descricaoItem, quantidadeItem] = item.split(",")

    valorFinal = valorFinal + (quantidadeItem * precoItensCardapio[descricaoItem]);
 });
 return valorFinal;
}