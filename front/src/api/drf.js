const HOST = 'http://127.0.0.1:8000/api/v1/' //'http://35.87.44.31/api/v1/'

const ACCOUNTS = 'accounts/'
const ARTICLES = 'articles/'
const COMMENTS = 'comments/'
const SEARCH = 'serarch/'
const NEWS = 'news/'

export default{
  accounts: {
    login: () => HOST + ACCOUNTS + 'login/',
    logout: () => HOST + ACCOUNTS + 'logout/',
    signup: () => HOST + ACCOUNTS + 'signup/',
    profile: username => HOST + ACCOUNTS + 'profile/' + `${username}/`,
    // currentUserInfo: () => HOST + ACCOUNTS + 'user/',
  },
  articles: {
    articles: () => HOST + ARTICLES,
    article: articlePk => HOST + ARTICLES + `${articlePk}/`,
    articlelike: articlePk => HOST + ARTICLES + `${articlePk}/` + 'like/',
    comments: articlePk => HOST + ARTICLES + `${articlePk}/` + COMMENTS,
    comment: (articlePk, commentPk) =>
      HOST + ARTICLES + `${articlePk}/` + COMMENTS + `${commentPk}/`,
    search: () => HOST + ARTICLES + SEARCH,
    news: () => HOST + ARTICLES + NEWS
    // profileArticles: username => HOST + ARTICLES + PROFILE + `${username}/`,
    // newArticles: moviePk => HOST + ARTICLES + 'new/' + `${moviePk}/`,
  },
}