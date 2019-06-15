import Vue from 'vue';
import Vuex from 'vuex';

import CountNumberActions from '@/actions/count';
import CountNumberMutation from '@/mutation/count';
import CountNumberState from '@/state/count';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...CountNumberState,
  },
  mutations: {
    ...CountNumberMutation,
  },
  actions: {
    ...CountNumberActions,
  },
});
