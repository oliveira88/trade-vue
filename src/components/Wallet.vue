<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Wallet"
})
</script>

<!--<template>-->
<!--  <div class="d-flex align-center flex-column">-->
<!--    <v-card width="400">-->
<!--      <v-card-item>-->
<!--        <v-card-title>This is a title</v-card-title>-->
<!--        <v-card-subtitle>This is a subtitle</v-card-subtitle>-->
<!--      </v-card-item>-->
<!--      <v-card-text>This is content</v-card-text>-->
<!--    </v-card>-->
<!--  </div>-->
<!--</template>-->
<!--<style scoped>-->

<!--</style>-->
<template>
  <v-card class="wallet-card" dark>
    <v-card-title class="wallet-title">{{ 'nome' }}</v-card-title>
    <v-card-text>
      <v-row>
        <v-col>
          <div class="wallet-label">Money:</div>
          <div class="wallet-value">{{ 'valore' }} USD</div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.wallet-card {
  background-color: #424242; /* Dark background color */
  color: #ffffff; /* Text color */
}

.wallet-title {
  font-size: 1.5rem;
}

.wallet-label {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.wallet-value {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
