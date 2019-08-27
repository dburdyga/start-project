import Vue from 'vue';
import Vuex from 'vuex';
import loading from '../src/store/loading';

Vue.use(Vuex);

const store = new Vuex.Store({
  // создание хранилища
  modules: {
    loading,
  },
});

export default store;
