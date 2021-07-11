import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import tasks from './modules/tasks/index.js'
import auth from './modules/authentication/index.js'
import users from './modules/users/index.js'

export default new Vuex.Store({
  modules:{
    tasks,auth,users
  },
  state: {
   
  },
  mutations: {
    
   
  },
  actions: {
    
    },

  getters: {
  

  },
})
