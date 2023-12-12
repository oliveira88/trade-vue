import { InjectionKey } from 'vue'
import { Router } from 'vue-router'
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex'
import actions from "@/store/actions";
import getters from "@/store/getters";
import state from "@/store/state";
import mutation from "@/store/mutations";
// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>
  }
}

export const storeKey: InjectionKey<VuexStore<StateInterface>> = Symbol('vuex-key')

 declare module 'vuex' {
   export interface Store<S> {
     readonly $router: Router;
   }
 }

export const store = createStore<StateInterface>({
  mutations: mutation,
  actions,
  state,
  getters,
})


export function useStore() {
  return vuexUseStore(storeKey)
}
