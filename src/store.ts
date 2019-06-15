import Vue from 'vue';
import Vuex from 'vuex';

import CountNumberActions from '@/actions/count';
import CountNumberMutation from '@/mutation/count';
import CountNumberState from '@/state/count';

import NameActions from '@/actions/name';
import NameMutation from '@/mutation/name';
import NameState from '@/state/name';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...CountNumberState,
    ...NameState,
  },
  mutations: {
    ...CountNumberMutation,
    ...NameMutation,
  },
  actions: {
    ...CountNumberActions,
    ...NameActions,
  },
});
