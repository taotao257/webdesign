import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state () {
    return {
      loginStatus: '用戶已經登錄',
      count: 0
    }
  },
  getters: {
    len (state) {
      console.log('getters執行了')
      return state.loginStatus.length
    }
  },
  mutations: {
    changeCount (state, num) {
      state.count += num
      console.log('mutation執行了,count值為', state.count)
    }
  },
  actions: {
    delayChangeCount (store, num) {
      setTimeout(() => {
        store.commit('changeCount', num)
      }, 3000)
    }
  },
  modules: {
  }
})
