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
      drawer: true,
      items: [
        {title: "Dashboard", icon: "mdi-view-dashboard", to: "/dashboard"},
        {title: "Cadastrar Empresa", icon: "mdi-account-plus", to: "/cadastrar-empresa"},
        {title: "Comprar Ações", icon: "mdi-cash-multiple", to: "/comprar-acoes"},
        {title: "Minhas Ações", icon: "mdi-finance", to: "/minhas-acoes"},
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
  <v-navigation-drawer v-model="drawer" absolute>
    <v-list-item>
      <img src="@/assets/trade-app-logo.jpg" class="w-100">
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item v-for="(item, i) in items" :to="item.to" :key="i" :title="item.title" :prepend-icon="item.icon"></v-list-item>
  </v-navigation-drawer>
  <v-app-bar
    color="white"
  >
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<style scoped>

</style>
