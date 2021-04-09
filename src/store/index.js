import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './modules/user'

Vue.use(Vuex)
const persistedStates = createPersistedState({
    paths: ['user']
})

export default new Vuex.Store({
    modules: {
        user
    },
    plugins: [persistedStates]
})
