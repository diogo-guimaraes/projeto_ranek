<template>
  <!-- 
    refactor(compoments): ProdutosPaginar
    add(compoments): ProdutosPaginar
    rm(compoments): ProdutosPaginar
  -->
  <div></div>
</template>

<script>
export default {
  props: {
    produtosPorPagina: {
      type: Number,
      default: 1,
    },
    produtosTotal: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style scoped>
</style>