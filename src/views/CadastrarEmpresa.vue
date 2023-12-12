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

      <currency-input v-model="empresa.valorUnitario" label="Preço Unitário" />

      <div class="d-flex justify-end">
        <v-btn color="#468a19" type="submit">
          Cadastrar
        </v-btn>
      </div>
    </form>
  </v-container>
</template>

<script>
import CurrencyInput from '@/components/CurrencyInput.vue'

import {empresasRef, usuariosRef} from "@/firebase";
import {push} from "firebase/database";
import {doc, setDoc} from "firebase/firestore";

export default {
  components: {CurrencyInput},
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
      this.empresa.valorUnitario = Number(this.empresa.valorUnitario.replace(/[^\d.,-]/g, '').replace(',', '.'));
      console.log(this.empresa);
      setDoc(doc(empresasRef, "empresa"), this.empresa);
      alert('Empresa cadastrada com sucesso!');
      // this.alert = true;
      this.empresa = {
        nome: '',
        qtdAcoes: 0,
        valorUnitario: 0
      };
      // const clear = setTimeout(() => {
      //   this.alert = false;
      //   clearTimeout(clear);
      // }, 3000);
    }
  }
}
</script>

<style>

</style>
