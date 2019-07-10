import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate"; // 将数据存入缓存 插件
import createLogger from 'vuex/dist/logger'; // vuex提示的插件和持久化的插件一起使用

import CountNumberActions from '@/actions/count';
import CountNumberMutation from '@/mutation/count';
import CountNumberState from '@/state/count';

import NameActions from '@/actions/name';
import NameMutation from '@/mutation/name';
import NameState from '@/state/name';

Vue.use(Vuex);

// 判断环境 vuex提示生产环境中不使用
const debug = process.env.NODE_ENV !== 'production';

const createPersisted = createPersistedState({
  storage: window.sessionStorage,
  reducer(val) { // val 相当于 state
    return {
      // 只储存state中的iNumberCount
      iNumberCount: val.iNumberCount
    }
  }
});

const createlocal = createPersistedState({
  storage: window.localStorage,
  reducer(val) { // val 相当于 state
    return {
      // 只储存state中的iNumberCount
      iNumberCount: val.iNumberCount
    }
  }
});

// const createcook = createPersistedState({   // cookie 不知道怎么写
//   storage: cookie,
//   reducer(val) { // val 相当于 state
//     return {
//       // 只储存state中的iNumberCount
//       iNumberCount: val.iNumberCount
//     }
//   }
// });

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
  plugins: debug ? [createLogger(), createPersisted , createlocal] : [createPersisted],

  // plugins: [createPersistedState({ // 存储到sessionStorage
  //   storage: window.sessionStorage,
  //   reducer(val) { // val 相当于 state
  //     return {
  //       // 只储存state中的iNumberCount
  //       iNumberCount: val.iNumberCount
  //     }
  //   }
  // })],
});


// plugins: [createPersistedState()]  // 默认存储到localStorage

//  plugins: [createPersistedState({ // 存储到cookie
// storage: window.cookie,
// })],  