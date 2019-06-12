import Vue from 'vue';
import Vuex from 'vuex';
import pages from './modules/pages'
import productInfos from './modules/productInfos'
import colors from './modules/colors'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: { pages, productInfos, colors },
  strict: debug,
})
