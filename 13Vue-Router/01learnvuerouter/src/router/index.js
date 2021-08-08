//配置路由相关的东西
import Vue from 'vue'
import VueRouter from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//import Home from '../components/Home'
//import About from '../components/About'
//import routers from 'vue-router'
//import User from '../components/User'

//使用路由懒加载的方式
const Home = () => import('../components/Home')
const HomeMessage = () => import('../components/HomeMessage')
const HomeNew = () => import('../components/HomeNew')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () =>import('../components/Profile')

//1.通过vue.use插件。安装插件
Vue.use(VueRouter)

//2.创建VueRouter对象
const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home,
    meta:{
      title:'首页'
    },
    children:[
      {
        path:'',
        redirect:'new'
      },
      {
        path:'message',
        component:HomeMessage,
        
      },
      {
        path:'new',
        component:HomeNew
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta:{
      title:'关于'
    }
  },
  {
    path:'/user/:userId',
    component: User,
    meta:{
      title:'用户'
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      title:'档案'
    }
  }
]
const router = new VueRouter({
  //配置组件和路由之间的映射关系
  routes,
  mode:'history',
  linkActiveClass:'active',
})
//前置守卫(guard)
router.beforeEach((to,from,next) =>{
  window.document.title = to.matched[0].meta.title;
  //console.log(to),
  //console.log('+=+===')
  next()
})

//后置钩子(hook)
router.afterEach((to, from) => {
  // to and from are both route objects.
 // console.log('-----')
})
//将router对象传入到Vue实例
export default router