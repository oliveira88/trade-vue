<template>
  <v-app>
    <v-main>
      <DrawerAside />
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import DrawerAside from "@/components/Aside.vue";
</script>
