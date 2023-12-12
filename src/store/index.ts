import { InjectionKey } from 'vue'
import { Router } from 'vue-router'
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex'
import actions from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import state from "@/store/state";
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
  actions,
  state,
  getters,
  mutations
})


export function useStore() {
  return vuexUseStore(storeKey)
}
