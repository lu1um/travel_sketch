import axios from 'axios'
import drf from '@/api/drf'

export default{
  state: {
    articles: [],
    article: {},
    homecitynews:[],
  },
  getters: {
    articles: state => state.articles,
    article: state => state.article,
    homecitynews: state => state.homecitynews,
  },
  mutations: {
    ARTICLES: (state, articles) => state.articles = articles,
    ARTICLE: (state, article) => state.article = article,
    HOMECITYNEWS: (state, articles) => state.homecitynews = articles,

  },
  actions: {
    fetchcitynews({commit}){
      axios({
        url: drf.articles.articles(),
        method:'get',
      })
      .then(res => {
        console.log(res.data)
        commit('HOMECITYNEWS', res.data)
      })
      .catch(err =>{
        console.error(err)
      })
    }
    // fetchArticle({commit}, articlePk){
    //   axios({
    //     url: drf.articles.article(articlePk),
    //     method: 'get',
    //     // headers:         
    //   })
    //   .then(res =>{
    //     console.log(res)
    //     commit('ARTICLE', res.data)
    //   })
    //   .catch(err =>{
    //     console.error(err)
    //   })
    // }
  }
}
