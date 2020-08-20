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
    <input name="busca" id="busca" type="text" v-model="busca" placeholder="Buscar..." />
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

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}

#busca {
  width: 100%;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.1);
  padding: 20px;
  border: none;
  border-radius: 4px;
  transition: all 0.3s;
}

#busca:focus,
#busca:hover {
  outline: none;
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
}

#lupa {
  width: 62px;
  height: 62px;
  background: url("../assets/search.svg") no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  box-shadow: none;
}
</style>
