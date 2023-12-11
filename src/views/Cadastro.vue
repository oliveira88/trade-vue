<script lang="ts">
import {defineComponent} from 'vue'
import { usuariosRef } from '@/firebase';
import { push } from 'firebase/database'
export default defineComponent({
  name: "Cadastro",
  data() {
    return {
      nome: "",
      cpf: "",
      senha: "",
      valorAcoes: "",
    };
  },
  methods: {
    cadastrar() {
      console.log(this.nome, this.cpf, this.senha);
      const usuario = {
        nome: this.nome,
        cpf: this.cpf,
        senha: this.senha,
        valorAcoes: this.valorAcoes,
      };
      localStorage.setItem('usuario', JSON.stringify(usuario));
      push(usuariosRef, usuario);
      this.$router.push('/login');
    },
  },
})
</script>

<template>
  <div class="list-item">
    <img src="@/assets/trade-app-logo.jpg" class="logo" alt="Logo">
  </div>
  <v-divider></v-divider>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-sheet width="400" class="mx-auto">
      <h2 class="mb-8">Cadastro</h2>
      <v-form fast-fail @submit.prevent="cadastrar">
        <v-text-field v-model="nome" label="Nome"></v-text-field>
        <v-text-field v-model="cpf" label="CPF" mask="###.###.###-##"></v-text-field>
        <v-text-field v-model="senha" label="Senha" type="password"></v-text-field>
        <v-text-field v-model="valorAcoes" label="Valor disponível para investimento" type="number"></v-text-field>

        <v-btn type="submit" color="primary" block class="mt-2" @click="cadastrar">Criar</v-btn>

      </v-form>
      <div class="mt-2">
        <p class="text-body-2">Já possui uma conta? <router-link to="/login" tag="a">Logar</router-link></p>
      </div>
    </v-sheet>
  </div>
</template>

<style scoped>
  .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    width: 10%;
  }
</style>
