<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CadastroEmpresa",
  emits: ['open'],
  data () {
    return {
      dialog: false,
    }
  },
  methods: {
    abrirModalCadastro() {
      this.$refs.btn.click();
    }
  }
})
</script>

<template>
  <v-dialog>
    <template v-slot:activator="{ props }">
      <button type="button" v-bind="props" class="btn" ref="btn" >Cadastrar empresa</button>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="Cadastro de empresa">
        <v-card-text>
          <v-input label="Nome da empresa" />
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text="Close Dialog"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>
.btn {
  //width: 100%;
}
</style>
