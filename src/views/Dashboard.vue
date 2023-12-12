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
          title="R$ 1000,00"
          subtitle="Total investido"
          color="#468abb"
        >
          <template v-slot:append>
            <v-icon icon="mdi-check" size="x-large" color="white"></v-icon>
          </template>
      </v-card>
      {{dinheiroDisponivel}}
      {{totalInvestido}}
    </div>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['dinheiroDisponivel', 'totalInvestido'])
  }
}
</script>

<style>

</style>
