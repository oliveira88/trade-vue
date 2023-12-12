<template>
  <v-container>
   <h2>Ações Adquiridas</h2>

    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            Empresa
          </th>
          <th class="text-left">
            Qtd. de Ações Adquiridas
          </th>
          <th class="text-left">
            Total
          </th>
          <th class="text-left">
            Opções
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(acao, i) in acoes"
          :key="i"
        >
          <td>{{ acao.empresa.nome }}</td>
          <td>{{ acao.quantidade }}</td>
          <td>{{ $filters.formatCurrency(acao.quantidade * acao.empresa.valorUnitario) }}</td>
          <td>
            <v-btn prepend-icon="mdi-currency-usd" color="#0e7eb5" @click="abrirModalVenda(acao)">
              Vender
            </v-btn>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td><strong>TOTAL</strong></td>
          <td>{{ acoesTotais }}</td>
          <td>{{ $filters.formatCurrency(valorTotalAdquirido) }}</td>
          <td>
          </td>
        </tr>
      </tfoot>
    </v-table>

    <venda-dialog
      :dialog="dialog"
      :acao-selecionada="acaoSelecionada"
      @confirmar-venda="realizarVenda"
      @cancel="fecharModal"
    />

  </v-container>
</template>

<script>
import {useCollection} from "vuefire";
import {acoesCompradasRef, empresasRef} from "@/firebase";
import VendaDialog from './VendaDialog.vue';
import {onSnapshot, getDoc, doc} from "firebase/firestore";

export default {
  components: {VendaDialog},
  mounted() {
    this.obterAcoes();
  },
  data() {
    return {
      acoes: [],
      dialog: false,
      acaoSelecionada: null,
    }
  },
  computed: {
    acoesTotais() {
      return this.acoes.reduce((total, acao) => total + acao.quantidade, 0);
    },
    valorTotalAdquirido() {
      return this.acoes.reduce((total, acao) =>
        total + (acao.quantidade * acao.empresa.valorUnitario),
        0
      );
    }
  },
  methods: {
    async buscarEmpresaId(id) {
      try {
        const result = await getDoc(doc(empresasRef, id));
        return {id: result.id, ...result.data()};
      } catch(e) {
        alert('Ocorreu um erro ao buscar a empresa!');
      }
    },
    abrirModalVenda(acao) {
      this.acaoSelecionada = acao;
      this.dialog = true;
    },
    fecharModal() {
      this.acaoSelecionada = null;
      this.dialog = false;
    },
    realizarVenda({ acaoSelecionada, quantidadeVenda }) {
      acaoSelecionada.quantidade -= quantidadeVenda;
      this.fecharModal();
    },
    obterAcoes() {
      onSnapshot(acoesCompradasRef, (snapshot) => {
        this.acoes = snapshot.docs.map((doc) => {
          return {id: doc.id, ...doc.data()}
        });
        this.acoes.forEach( async   a => {
          a.empresa = await this.buscarEmpresaId(a.empresaId);
        })
      });
    }
  }
}
</script>

<style>

</style>
