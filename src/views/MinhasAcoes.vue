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
          <td>{{ acao.qtdComprada }}</td>
          <td>{{ $filters.formatCurrency(acao.qtdComprada * acao.empresa.valorUnitario) }}</td>
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
import VendaDialog from './VendaDialog.vue';

export default {
  components: {VendaDialog},
  data() {
    return {
      acoes: [
        {
          empresa: {
            nome: 'Empresa Teste',
            qtdAcoes: 1000,
            valorUnitario: 20
          },
          qtdComprada: 100
        },
        {
          empresa: {
            nome: 'Empresa 2',
            qtdAcoes: 2000,
            valorUnitario: 80
          },
          qtdComprada: 100
        }
      ],
      dialog: false,
      acaoSelecionada: null,
    }
  },
  computed: {
    acoesTotais() {
      return this.acoes.reduce((total, acao) => total + acao.qtdComprada, 0);
    },
    valorTotalAdquirido() {
      return this.acoes.reduce((total, acao) =>
        total + (acao.qtdComprada * acao.empresa.valorUnitario),
        0
      );
    }
  },
  methods: {
    abrirModalVenda(acao) {
      this.acaoSelecionada = acao;
      this.dialog = true;
    },
    fecharModal() {
      this.acaoSelecionada = null;
      this.dialog = false;
    },
    realizarVenda({ acaoSelecionada, quantidadeVenda }) {
      acaoSelecionada.qtdComprada -= quantidadeVenda;

      this.fecharModal();
    },
  }
}
</script>

<style>

</style>
