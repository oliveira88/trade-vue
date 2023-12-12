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
import {empresasRef} from "@/firebase";
import {useCollection} from "vuefire";
import {addDoc, updateDoc} from "firebase/firestore";
import CompraDialog from './CompraDialog.vue';

export default {
  components: {CompraDialog},
  async mounted() {
    const {data: empresas, promise: empresasPromise} = useCollection(empresasRef);
    await empresasPromise.value;
    this.empresas = empresas;

    console.log({empresas});
  },
  data() {
    return {
      empresas: []
    }
  },
  methods: {
    async comprarAcao(empresa) {
      const empresaAtualizar = this.empresa.find((e) => e.id === empresa.id);
      empresaAtualizar.qtdAcoes;
      updateDoc(empresasRef, this.empresa).then(() => {
        alert('Ação comprada com sucesso!');
        this.empresa = {
          nome: '',
          qtdAcoes: 0,
          valorUnitario: 80
        }
      ],
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
  }
}
</script>

<style>

</style>
