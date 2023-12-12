<template>
  <v-container>
   <h2>Empresas</h2>

    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            Empresa
          </th>
          <th class="text-left">
            Quantidade de Ações
          </th>
          <th class="text-left">
            Valor Unitário
          </th>
          <th class="text-left">
            Opções
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(empresa, i) in empresas"
          :key="i"
        >
          <td>{{ empresa.nome }}</td>
          <td>{{ empresa.qtdAcoes }}</td>
          <td>{{ $filters.formatCurrency(empresa.valorUnitario) }}</td>
          <td>
            <v-btn
              prepend-icon="mdi-cart-variant"
              color="#468a19"
              :disabled="empresa.qtdAcoes === 0"
              @click="abrirModalCompra(empresa)"
            >
              Comprar
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>

    <compra-dialog
      :dialog="dialog"
      :empresa="empresaSelecionada"
      @confirmar-compra="realizarCompra"
      @cancel="fecharModal"
    />
  </v-container>
</template>

<script>
import CompraDialog from './CompraDialog.vue';
import { empresasRef } from "@/firebase";
import { useDatabaseList } from "vuefire";

export default {
  components: {CompraDialog},
  data() {
    return {
      empresas: [],
      dialog: false,
      empresaSelecionada: null
    }
  },
  methods: {
    abrirModalCompra(empresa) {
      this.empresaSelecionada = empresa;
      this.dialog = true;
    },
    fecharModal() {
      this.empresaSelecionada = null;
      this.dialog = false;
    },
    realizarCompra({ empresa, quantidadeCompra }) {
      empresa.qtdAcoes -= quantidadeCompra;

      this.fecharModal();
    },
  },
  async mounted() {
    const {data: empresas, promise: empresasPromise} = useDatabaseList(empresasRef);
    await empresasPromise.value;
    this.empresas = empresas;
  },
}
</script>

<style>

</style>
