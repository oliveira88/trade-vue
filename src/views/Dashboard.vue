<template>
  <v-container>
   <h2>Dashboard</h2>
    <div class="d-flex mt-5">
      <v-card
        class="mx-auto"
        width="300"
        title="R$ 60,00"
        subtitle="Disponível para investimento"
        color="#468a19"
      >
        <template v-slot:append>
          <v-icon icon="mdi-piggy-bank-outline" size="x-large" color="white"></v-icon>
        </template>
      </v-card>

      <v-card
          class="mx-auto"
          width="300"
          :title="totalInvestidoString"
          subtitle="Total investido"
          color="#468abb"
        >
          <template v-slot:append>
            <v-icon icon="mdi-check" size="x-large" color="white"></v-icon>
          </template>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  mounted() {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      this.dinheiroDisponivel = JSON.parse(usuario).valorAcoes;
      // this.totalInvestido = JSON.parse(usuario).;
    }
  },
  data() {
    return {
      totalInvestido: 0,
      dinheiroDisponivel: 0,
    }
  },
  computed: {
    // ...mapGetters(['dinheiroDisponivel', 'totalInvestido']),
    totalInvestidoString() {
      return `R$ ${this.totalInvestido},00`
    },
    usuario() {
      return JSON.parse(localStorage.getItem('usuario'));
    }
  }

}
</script>

<style>

</style>
