import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    SET_ITEMS_TO_STATE: (state, items) => {
      const data = localStorage.getItem('todos');
      /*eslint-disable */
        data ? state.items = JSON.parse(data) : state.items = items;
        /* eslint-enable */
    },
    REMOVE_FROM_ITEM: (state, index) => {
      state.items.splice(index, 1);
    }
  },
  actions: {
    GET_ITEMS_FROM_API({ commit }) {
      return axios(process.env.VUE_APP_URL, {
        method: 'GET'
      })
        .then((items) => {
          commit('SET_ITEMS_TO_STATE', items.data);
          return items;
        });
    },
    DELETE_FROM_ITEM({ commit }, index) {
      commit('REMOVE_FROM_ITEM', index);
    }
  },
  getters: {
    ITEMS(state) {
      return state.items;
    }
  }
});

export default store;
