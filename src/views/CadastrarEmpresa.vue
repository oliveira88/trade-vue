<template>
  <v-container>
    <v-alert :value="alert"> {{ mensagem }} </v-alert>
    <h2 class="mb-8">Cadastrar Empresa</h2>

    <form @submit.prevent="submit">
      <v-text-field
        v-model="empresa.nome"
        label="Nome da Empresa"
      ></v-text-field>

      <v-text-field
        v-model="empresa.qtdAcoes"
        type="number"
        label="Quantidade de ações"
      ></v-text-field>

      <v-text-field
        v-model="empresa.valorUnitario"
        label="Preço unitário"
      ></v-text-field>

      <!-- <currency-input v-model="empresa.valorUnitario" label="Preço Unitário" /> -->

      <div class="d-flex justify-end">
        <v-btn color="#468a19" type="submit">
          Cadastrar
        </v-btn>
      </div>
    </form>
  </v-container>
</template>

<script>
// import CurrencyInput from '@/components/CurrencyInput.vue'

import {empresasRef} from "@/firebase";
import {addDoc} from "firebase/firestore";

export default {
  // components: {CurrencyInput},
  data() {
    return {
      empresa: {
        nome: '',
        qtdAcoes: 0,
        valorUnitario: 0
      },
      mensagem: '',
      alert: false
    }
  },
  methods: {
    submit() {
      console.log(this.empresa);
      addDoc(empresasRef, this.empresa).then(() => {
        alert('Empresa cadastrada com sucesso!');
        this.empresa = {
          nome: '',
          qtdAcoes: 0,
          valorUnitario: 0
        };
      }).catch(() => {
        alert('Ocorreu um erro ao cadastrar a empresa!');
      });
    }
  }
}
</script>

<style>

</style>
