import { MutationTree } from 'vuex';
import { ExampleStateInterface } from './state';

const mutation: MutationTree<ExampleStateInterface> = {
  setUsuario (state, usuario) {
    state.usuario = usuario;
  }
};

export default mutation;
