// fake data
const serv_pages = [
  { id: 1, title: 'Recto', format: '10x10', price: '10000'},
  { id: 2, title: 'Verso', format: '10x15', price: '10000'},
]

const state = {
  pages: [],
  focusedPage: null
}

const getters = {
  getAll: (state) => state.pages,
  isActivePage (state) {
    return (page) => page.id == state.focusedPage
  },
  getActivePage (state, getters) {
    return state.pages.find(getters.isActivePage)
  },
  hasActivePage: (state) => !!state.focusedPage
}

const mutations = {
  setPages (state, pages) { state.pages = pages },
  setFocus (state, pageId) { state.focusedPage = pageId }
}

const actions = {
  getAllPages({ commit }) {
    commit('setPages', serv_pages)
  },
  setFocusedPage({ commit }, page) {
    commit('setFocus', page.id)
  },
  setFirstPageToFocused({ dispatch, state }) {
    if (state.pages.length > 0) {
      dispatch('setFocusedPage', state.pages[0])
    }
  },
  initPages({ dispatch }) {
    dispatch('getAllPages').then(
      dispatch('setFirstPageToFocused')
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
