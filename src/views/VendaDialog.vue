<template>
  <v-dialog v-if="dialog && acaoSelecionada" :model-value="dialog" max-width="400">
    <v-card>
      <v-card-title>
        Vender Ações - {{ acaoSelecionada.empresa.nome }}
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="confirmarVenda">
          <v-text-field
            v-model="quantidadeVenda"
            label="Quantidade de Ações"
            type="number"
            required
          ></v-text-field>

          <div class="mb-5">Preço Total: {{ $filters.formatCurrency(quantidadeVenda * acaoSelecionada.empresa.valorUnitario) }}</div>

          <div class="d-flex justify-end">
            <v-btn @click="$emit('cancel')" class="me-3">
              Cancelar
            </v-btn>
            <v-btn type="submit" color="primary">Confirmar Venda</v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
    acaoSelecionada: Object,
  },
  data() {
    return {
      quantidadeVenda: null,
    };
  },
  methods: {
    confirmarVenda() {
      if (!this.quantidadeVenda || this.quantidadeVenda <= 0) {
        return;
      }

      this.$emit('confirmar-venda', {
        acaoSelecionada: this.acaoSelecionada,
        quantidadeVenda: this.quantidadeVenda,
      });

      this.quantidadeVenda = null;
    },
  },
};
</script>
