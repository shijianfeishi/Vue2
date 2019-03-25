import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
// 登录成功后进入的首页
import content from '@/components/content/content'
// 点击淘宝搜索跳转的页面
import clickJump from '@/components/clickJump/clickJump'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: login
    // },
    {
      // 登录成功后进入的首页
      path: '/',
      name: 'content',
      component: content
    },
    {
      // 点击淘宝搜索跳转的页面
      path: '/clickJump',
      name: 'clickJump',
      component: clickJump
    },
    
  ]
})