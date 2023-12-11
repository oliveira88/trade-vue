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
            <v-btn prepend-icon="mdi-cart-variant" color="#468a19" :disabled="empresa.qtdAcoes === 0">
              Comprar
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      empresas: [
        {
          nome: 'Empresa Teste',
          qtdAcoes: 1000,
          valorUnitario: 20
        },
        {
          nome: 'Empresa 2',
          qtdAcoes: 2000,
          valorUnitario: 80
        },
        {
          nome: 'Empresa 3',
          qtdAcoes: 0,
          valorUnitario: 80
        }
      ]
    }
  }
}
</script>

<style>

</style>
