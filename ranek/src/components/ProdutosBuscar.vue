<template>
  <!-- 
    refactor(compoments): ProdutosLista
    add(compoments): ProdutosLista
    rm(compoments): ProdutosLista
  -->
  <form>
    <!-- adiciona input para busca passando a diretiva v-model apontando para data()
     e um botão passando @click que ao clicar ativará o método buscarProdutos
    e prevente para prevenir que o browser atualize quando o botão for clicado-->
    <input name="busca" id="busca" type="text" v-model="busca" />
    <input type="submit" id="lupa" value="Buscar" @click.prevent="buscarProdutos" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      busca: "",
    };
  },
  methods: {
    // criamos a função buscarProdutos que regastará o valor em data busca
    //   para ser possível passar parametros para usar na url, passamos um objeto chamado query que é
    //  um parâmetro de query
    buscarProdutos() {
      this.$router.push({ query: { q: this.busca } });
    },
  },
};
</script>

<style scoped></style>
