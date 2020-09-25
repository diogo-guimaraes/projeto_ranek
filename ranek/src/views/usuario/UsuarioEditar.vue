<template>
  <!-- 
    refactor(view): UsuarioEditar
    add(view): UsuarioEditar
    rm(view): UsuarioEditar
  -->
  <section>
    <UsuarioForm>
      <button class="btn" @click.prevent="atualizarUsuario">Atualizar Usuário</button>
    </UsuarioForm>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue";
import { api } from "@/services.js";
export default {
  name: "UsuarioEditar",
  components: {
    UsuarioForm
  },
};
</script>

<style>
</style>
