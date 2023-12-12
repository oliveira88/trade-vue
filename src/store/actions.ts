import { ActionTree } from 'vuex';
import { StateInterface } from './index';
import { ExampleStateInterface } from './state';

const actions: ActionTree<ExampleStateInterface, StateInterface> = {
  comprarAcao ({ commit }, payload) {
    commit('comprarAcao', payload);
  }
};

export default actions;
