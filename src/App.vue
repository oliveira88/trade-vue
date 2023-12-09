<template>
  <v-app>
    <v-main>
      <DrawerAside />
      <RouterView />
      <Wallet />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import DrawerAside from "@/components/Aside.vue";
  import Wallet from "@/components/Wallet.vue";
</script>
