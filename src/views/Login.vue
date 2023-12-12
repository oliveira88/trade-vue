<script lang="ts">
import {useCollection} from 'vuefire'
import {defineComponent} from 'vue'
import {usuariosRef} from "@/firebase";

export default defineComponent({
  name: "Login",
  mounted() {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      this.$router.push('/dashboard');
    }
  },
  data() {
    return {
      cpf: "",
      senha: "",
    }
  },
  methods: {
    async login() {
      console.log(this.cpf, this.senha);
      const {data: users, promise: usersPromise } = useCollection(usuariosRef);
      await usersPromise.value;
      const usuario = users.value.find((user) => user.cpf === this.cpf && user.senha === this.senha);
      if(usuario) {
        localStorage.setItem('usuario', JSON.stringify(usuario));
        this.$router.push({name: 'dashboard'});
      }
    },
  },
})
</script>

  <template>
    <div class="list-item">
      <img src="@/assets/trade-app-logo.jpg" class="logo" alt="Logo">
    </div>
    <v-divider></v-divider>
    <div class="d-flex align-center justify-center login-container">
      <v-sheet width="400" class="mx-auto">
        <h2 class="mb-8">Login</h2>
        <v-form fast-fail>
          <v-text-field v-model="cpf" label="CPF"></v-text-field>
          <v-text-field v-model="senha" label="Senha" @keyup.enter="login"></v-text-field>

          <v-btn type="button" color="primary" block class="mt-2" @click="login">Login</v-btn>

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
    height: 64px;
  }

  .login-container {
    height: calc(100vh - 65px);
  }
</style>
