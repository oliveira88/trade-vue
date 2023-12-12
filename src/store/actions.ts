import { ActionTree } from 'vuex';
import { StateInterface } from './index';
import { ExampleStateInterface } from './state';

const actions: ActionTree<ExampleStateInterface, StateInterface> = {
  obterUsuario ({ commit }, payload) {
    commit('obterUsuario', payload);
  },
  comprarAcao ({ commit }, payload) {
    commit('comprarAcao', payload);
  }
};

export default actions;
