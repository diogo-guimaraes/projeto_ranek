// cria serialização da url escrita em ProdutosBuscar->buscarProdutos e coloca dentro de queryString para ser usado em ProdutosLista
// computed->url
// depois do foreach ele adiciona em queryString &q= url, e temos nossa rota
export function serialize(obj) {
  let queryString = "";
  for (let key in obj) {
    queryString += `&${key}=${obj[key]}`;
  }
  return queryString;
}
