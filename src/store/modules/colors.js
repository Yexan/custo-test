const serv_data = [
  { id: 1, name: 'Pumpkin', code: '#FDB525' },
  { id: 2, name: 'Coral', code: '#F15A5D' },
  { id: 3, name: 'Skyblue', code: '#95C0E7' },
]

const mapServColor = (servColor) => {
  return { id: servColor.id, code: servColor.code }
}

const state = {
  colors: [],
  activeColorId: Number
}

const getters = {
  getColors: (state) => state.colors,
  isActiveColor (state) {
    return (color) => color.id === state.activeColorId
  },
  getActiveColor (state, getters) {
    return state.colors.find(getters.isActiveColor)
  }
}

const mutations = {
  setColors (state, servColors) {
    state.colors = servColors.map(mapServColor)
  },
  setActive (state, colorId) {
    state.activeColorId = colorId
  }
}

const actions = {
  fetchColors ({ commit }) {
    commit('setColors', serv_data)
  },
  setActiveColor({ commit }, color) {
    commit('setActive', color.id)
  },
  setFirstColorActive({ dispatch, state }) {
    if (state.colors.length > 0) {
      dispatch('setActiveColor', state.colors[0])
    }
  },
  initColors({ dispatch }) {
    dispatch('fetchColors').then(
      dispatch('setFirstColorActive')
    )
  }
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
