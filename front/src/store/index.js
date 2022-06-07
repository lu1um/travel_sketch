import Vue from 'vue'
import Vuex from 'vuex'

import accounts from './modules/accounts'
import articles from './modules/articles'
import news from './modules/news'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    accounts, articles, news
  }
})
