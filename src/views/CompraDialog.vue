<template>
  <v-dialog v-if="dialog && empresa" :model-value="dialog" max-width="400">
    <v-card>
      <v-card-title>
        Comprar Ações - {{ empresa.nome }}
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="confirmarCompra">
          <v-text-field
            v-model="quantidadeCompra"
            label="Quantidade de Ações"
            type="number"
            required
          ></v-text-field>

          <div class="mb-5">Valor Total: {{ $filters.formatCurrency(quantidadeCompra * empresa.valorUnitario) }}</div>

          <div class="d-flex justify-end">
            <v-btn @click="$emit('cancel')" class="me-3">
              Cancelar
            </v-btn>
            <v-btn type="submit" color="primary">Confirmar Compra</v-btn>
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
    empresa: Object,
  },
  data() {
    return {
      quantidadeCompra: null,
    };
  },
  methods: {
    confirmarCompra() {
      if (!this.quantidadeCompra || this.quantidadeCompra <= 0) {
        return;
      }

      this.$emit('confirmar-compra', {
        empresa: this.empresa,
        quantidadeCompra: this.quantidadeCompra,
      });

      this.quantidadeCompra = null;
    },
  },
};
</script>
