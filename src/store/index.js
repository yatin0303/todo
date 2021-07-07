import { createStore } from "vuex";

export default createStore({
  state: {
    theme: "light",
  },
  mutations: {
    setTheme(state, payload) {
      state.theme = payload;
    },
  },
  actions: {
    setTheme(context, payload) {
      context.commit("setTheme", payload);
    },
  },
  getters: {
    getTheme(state) {
      return state.theme;
    },
  },
  modules: {},
});
