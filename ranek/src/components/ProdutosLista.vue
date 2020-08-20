<template>
  <!-- 
    refactor(compoments): ProdutosLista
    add(compoments): ProdutosLista
    rm(compoments): ProdutosLista
  -->
  <section class="produtos-container">
    <div v-for="produto in produtos" :key="produto.id">
      <img v-if="produto.fotos" :src="produto.fotos[0].src" :alt="produto.fotos[0].titulo" />
      <p class="preco">{{ produto.preco }}</p>
      <h2 class="titulo">{{ produto.nome }}</h2>
      <p>{{ produto.descricao }}</p>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";
import { serialize } from "@/helpers.js";
export default {
  data() {
    return {
      produtos: null,
      produtosPorPagina: 9,
    };
  },

  computed: {
    // retrna os dados serializado na funlção  serialize em helpers retornando na rota  de busca o valor da url e adiciona paginete aponstado em produtosPorPagina
    url() {
      const query = serialize(this.$route.query);
      return `/produto?_limit=${this.produtosPorPagina}${query}`;
    },
  },
  methods: {
    // faz um fech na api e apresenta os dados quando ativado a primeira vez
    getProdutos() {
      api.get(this.url).then((response) => {
        this.produtos = response.data;
      });
    },
  },
  // ativa o método getProdutos toda vez que a url é modificada
  watch: {
    url() {
      this.getProdutos();
    },
  },
  // ativa o método getProdutos toda vez que a aplicação é iniciada
  created() {
    this.getProdutos();
  },
};
</script>

<style scoped></style>
