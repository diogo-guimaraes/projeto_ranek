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
    {{usuario_produtos}}
  </section>
</template>

<script>
import ProdutoAdicionar from "@/components/ProdutoAdicionar.vue";
import { mapState, mapActions } from "vuex";
export default {
   name: "UsuarioProdutos",
   components: {
    ProdutoAdicionar,
  },
  //  Passando login para verificar se o usuário está logado , usuario para puxas as informações do usuário e  produtos também
  computed: {
    // mapeia os estados das priedades 
    ...mapState(["login", "usuario", "usuario_produtos"])
  },
  // mapeia e puxa ação de getUsuarioProdutos
  methods: {
    ...mapActions(["getUsuarioProdutos"])
  },
  created() {
    if (this.login) {
      // se logir for true faz um getUsuarioProdutos
      this.getUsuarioProdutos();
    }
  }  
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
</style>
