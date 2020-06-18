import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddToDo from '@/components/AddToDo'
import EditToDo from '@/components/EditToDo'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import LogSign from '@/components/auth/LogSign'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'LogSign',
      component: LogSign
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      meta: {
        requiresAuth: true    // so that no one can access withoiut loggin in 
      }
    },
    {
      path: '/add-todo',
      name: 'AddToDo',
      component: AddToDo,
      meta: {
        requiresAuth: true      // so that no one can access withoiut loggin in 
      }
      
    },
    {
      path: '/edit-todo/:todo_slug',
      name: 'EditToDo',
      component: EditToDo,
      meta: {
        requiresAuth: true    // so that no one can access withoiut loggin in 
      }
    }
  ]
})

  // ROUTE GUARD

router.beforeEach((to, from, next) => {
    if(to.matched.some(rec => rec.meta.requiresAuth)){

      let user = firebase.auth().currentUser
      if(user){
        // user is logged in, send em through
        next()
      } else {
        next({ name: 'Login'}) // not logged in - send to Login component
      }
    } else {
      next()
    }
})

export default router
