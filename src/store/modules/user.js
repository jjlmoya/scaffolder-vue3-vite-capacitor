const state = () => ({
    name: ''
})

const getters = {
    name: state => state.name
}

const mutations = {
    SET_NAME (state, payload) {
        state.name = payload
    }
}

const actions = {
    setName ({ commit }, name) {
        commit('SET_NAME', name)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
