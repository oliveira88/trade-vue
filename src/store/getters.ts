import { GetterTree } from 'vuex';
import { StateInterface } from './index';
import { ExampleStateInterface } from './state';

const getters: GetterTree<ExampleStateInterface, StateInterface> = {
  dinheiroDisponivel (state) {
    return state.dinheiroDisponivel;
  },
  totalInvestido (state) {
    return state.totalInvestido;
  },
  acoes (state) {
    return state.acoes;
  }
};

export default getters;
