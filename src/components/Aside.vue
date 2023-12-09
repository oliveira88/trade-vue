<script lang="ts">
import {defineComponent} from 'vue'
import CadastroEmpresa from "@/components/CadastroEmpresa.vue";
import cadastroEmpresa from "@/components/CadastroEmpresa.vue";


export default defineComponent({
  name: "DrawerAside",
  computed: {
    cadastroEmpresa() {
      return cadastroEmpresa
    }
  },
  components: {CadastroEmpresa},
  data() {
    return {
      items: [
        {title: "Dashboard", icon: "mdi-view-dashboard", to: "/dashboard"},
      ],
    }
  },
  methods: {
    abrirModalCadastro() {
      this.$refs.modal.abrirModalCadastro();
    }
  }
})

</script>

<template>
  <v-navigation-drawer>
    <v-list-item title="Trade" subtitle="Vuetify"></v-list-item>
    <v-divider></v-divider>
    <v-list-item prepend-icon="mdi-account-plus" @click="abrirModalCadastro">
      <CadastroEmpresa ref="modal"/>
    </v-list-item>
<!--    <v-list-item title="Cadastrar empresa" prepend-icon="mdi-account-plus" @click="abrirModalCadastro" />-->
    <v-list-item v-for="item in items" :to="item.to" :title="item.title" :prepend-icon="item.icon"></v-list-item>
  </v-navigation-drawer>
</template>

<style scoped>

</style>
