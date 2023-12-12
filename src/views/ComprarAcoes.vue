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
import {acoesCompradasRef, empresasRef, usuariosRef} from "@/firebase";
import {useCollection} from "vuefire";
import {addDoc, updateDoc, doc, onSnapshot} from "firebase/firestore";
import CompraDialog from './CompraDialog.vue';

export default {
  components: {CompraDialog},
  mounted() {
    this.obterEmpresas();
  },
  data() {
    return {
      empresas: [],
      dialog: false,
      empresaSelecionada: null
    }
  },
  methods: {
    obterEmpresas() {
      onSnapshot(empresasRef, (snapshot) => {
        this.empresas = snapshot.docs.map((doc) => {
          return {id: doc.id, ...doc.data()}
        });
      });

    },
    abrirModalCompra(empresa) {
      this.empresaSelecionada = empresa;
      this.dialog = true;
    },
    fecharModal() {
      this.empresaSelecionada = null;
      this.dialog = false;
    },
    realizarCompra({ empresa, quantidadeCompra }) {
      const empresaAtualizar = this.empresas.find((e) => e.id === empresa.id);
      empresaAtualizar.qtdAcoes -= quantidadeCompra;
      const precoARemoverUsuario = empresaAtualizar.valorUnitario * quantidadeCompra;
      let usuario = JSON.parse(localStorage.getItem('usuario'));
      usuario = { ...usuario, valorAcoes: usuario.valorAcoes - precoARemoverUsuario}


      updateDoc(doc(empresasRef, empresaAtualizar.id), empresaAtualizar).then(() => {
          alert('Empresa debitada com sucesso!');
          this.obterEmpresas();
      }).catch(() => {
          alert('Ocorreu um erro ao debitar a empresa!');
      });

      addDoc(acoesCompradasRef, {
        empresaId: empresaAtualizar.id,
        usuarioId: usuario.id,
        quantidade: quantidadeCompra,
      }).then(() => {
        alert('Ação comprada com sucesso!');
        this.obterEmpresas();
      }).catch(() => {
        alert('Ocorreu um erro ao comprar a ação!');
      });

      debugger;
      updateDoc(doc(usuariosRef, usuario.id), usuario).then(() => {
        alert('Saldo atualizado com sucesso!');
        localStorage.setItem('usuario', JSON.stringify(usuario));
      }).catch(() => {
        alert('Ocorreu um erro ao atualizar o saldo!');
      });
      this.fecharModal();
    },
  }
}
</script>

<style>

</style>
