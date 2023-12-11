<!-- <template>
  <input-mask
    v-model="value"
    :mask="currencyMask"
    :always-show-mask="true"
    :label="label"
    :hint="hint"
    :rules="rules"
  />
</template>

<script>
import { VueMaskDirective } from 'v-mask';

export default {
  directives: {
    mask: VueMaskDirective,
  },
  data() {
    return {
      value: null,
    };
  },
  computed: {
    currencyMask() {
      return 'R$ 0.00';
    },
    rules() {
      return [
        (v) => !!v || 'Campo obrigatório',
      ];
    },
  },
  methods: {
    updateValue() {
      // Remove o símbolo de moeda e converte para número
      const numericValue = Number(this.value.replace(/[^\d.-]/g, ''));

      // Atualiza o valor
      this.value = isNaN(numericValue) ? null : numericValue;
      this.$emit('input', this.value);
    },
  },
  props: {
    label: {
      type: String,
      default: 'Valor',
    },
    hint: {
      type: String,
      default: 'Informe o valor em Reais',
    },
  },
};
</script> -->
