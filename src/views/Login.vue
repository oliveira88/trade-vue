<script lang="ts">
import { useDatabaseList } from 'vuefire'
import {push} from 'firebase/database'
import {defineComponent} from 'vue'
import {usuariosRef} from "@/firebase";

export default defineComponent({
  name: "Login",
  mounted() {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      this.$router.push('/home');
    }
  },
  data() {
    return {
      cpf: "",
      senha: "",
    };
  },
  methods: {
    login() {
      console.log(this.cpf, this.senha);
      // const users = useDatabaseList(usuariosRef);
      // console.log({value});
      // const numberList = users.value.map((user) => user.cpf);
      //
      // console.log({numberList});
      this.$router.push('/');
    },
  },
})
</script>

  <template>
    <div class="list-item">
      <img src="@/assets/trade-app-logo.jpg" class="logo" alt="Logo">
    </div>
    <v-divider></v-divider>
    <div class="d-flex align-center justify-center" style="height: 100vh">
      <v-sheet width="400" class="mx-auto">
        <h2 class="mb-8">Login</h2>
        <v-form fast-fail @submit.prevent="login">
          <v-text-field v-model="cpf" label="CPF"></v-text-field>
          <v-text-field v-model="senha" label="Senha"></v-text-field>

          <v-btn type="submit" color="primary" block class="mt-2">Login</v-btn>

        </v-form>
        <div class="mt-2">
          <p class="text-body-2">Não possui uma conta? <router-link to="/cadastro" tag="a">Criar uma</router-link></p>
        </div>
      </v-sheet>
    </div>
  </template>

<style scoped>
  .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    width: 10%;
  }
</style>
