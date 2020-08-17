<template>
  <!-- 
    refactor(compoments): ProdutosLista
    add(compoments): ProdutosLista
    rm(compoments): ProdutosLista
  -->
  <div>
    {{ produtos }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      produtos: null,
    };
  },
  methods: {
    getProdutos() {
      fetch("http://localhost:3000/produto")
        .then((response) => response.json())
        .then((response) => {
          this.produtos = response;
        });
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style scoped></style>
