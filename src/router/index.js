import Vue from 'vue'
import Router from 'vue-router'
import Header from 'components/header'
import Read from 'components/read'
import Music from 'components/music'
import Film from 'components/film'
import Search from 'components/search'
import Mine from 'components/mine'
import Login from 'components/login'
import Filminit from 'components/filminit'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Header
    },
    {
      path: '/read',
      component: Read
    },
    {
      path: '/music',
      component: Music
    },
    {
      path: '/film',
      component: Film
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/filminit',
      component: Filminit
    }
  ]
})
