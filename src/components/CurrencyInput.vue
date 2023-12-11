<template>
  <v-text-field v-money="config" v-model.lazy="value" :label="label"></v-text-field>
</template>

<script>
import {VMoney} from 'v-money'

export default {
  props: {
    label: {
      type: String,
      default: 'Valor',
    },
  },
  data() {
    return {
      config: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        precision: 2,
        masked: false
      }
    }
  },
  directives: {money: VMoney},
}
</script>

<style>

</style>
