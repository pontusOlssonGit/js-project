import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddToDo from '@/components/AddToDo'
import EditToDo from '@/components/EditToDo'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-todo',
      name: 'AddToDo',
      component: AddToDo
      
    },
    {
      path: '/edit-todo/:todo_slug',
      name: 'EditToDo',
      component: EditToDo
    }
  ]
})
