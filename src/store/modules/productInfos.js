const serv_data = {
  name: 'Product Name',
  price: '1000',
}

const state = {
  name: String,
  price: Number
}

const getters = {
  getProductName (state) {
    return state.name
  },
  getProductPrice (state) {
    return state.price
  }
}

const mutations = {
  setName (state, newName) {
    state.name = newName
  },
  setPrice (state, newPrice) {
    state.price = newPrice
  }
}

const actions = {
  getProductInfos({commit}) {
    commit('setName', serv_data.name)
    commit('setPrice', serv_data.price)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
