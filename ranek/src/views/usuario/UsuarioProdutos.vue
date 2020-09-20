<template>
  <!-- 
    refactor(view): UsuarioProdutos
    add(view): UsuarioProdutos
    rm(view): UsuarioProdutos
  -->
  <section>
    <h2>Adicionar Produto</h2>
    <ProdutoAdicionar/>
    <h2>Seus Produtos</h2>
    
  </section>
</template>

<script>
import ProdutoAdicionar from "@/components/ProdutoAdicionar.vue";
export default {
   name: "UsuarioProdutos",
   components: {
    ProdutoAdicionar,   
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
</style>
