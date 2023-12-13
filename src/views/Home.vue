<template>
  <DrawerAside />
  <RouterView />
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import DrawerAside from "@/components/Aside.vue";
export default defineComponent({
  name: "App",
  components: {
    DrawerAside,
  },
  mounted() {
    const usuario = localStorage.getItem('usuario');
    if (!usuario) {
      this.$router.push('/login');
    }
  }
})

</script>
