import { createRouter, createWebHashHistory } from 'vue-router'
import defaultView from '../views/defaultView.vue'
import queryView from '../views/queryView.vue'
import orderView from '../views/orderView.vue'
import notFoundView from '../views/notFoundView.vue'
import classView from '@/views/classView.vue'
import insuranceCalcView from '@/views/insuranceCalcView.vue'
import typeEditView from '../views/typeEditView.vue'
import foodIdView from '@/views/foodIdView.vue'
import eggView from '@/views/eggView.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: defaultView
    },
    {
      path: '/query',
      name: 'query',
      component: queryView,
    },
    {
      path: '/order',
      name: 'order',
      component: orderView,
    },
    {
      path: '/class',
      name: 'class',
      component: classView,
    },{
      path: '/food/:id',
      name: 'food',
      component: foodIdView,
    },
    {
      path:'/typeEdit',
      name:'typeEdit',
      component: typeEditView
    }, 
    {
      path: '/insuranceCalc',
      name: 'insuranceCalc',
      component: insuranceCalcView
    },{
      path: '/rain',
      name: 'rain',
      component: eggView
    },
    {
      path: '/404',
      name: 'notFound',
      component: notFoundView
    },

    {
      path: '/:pathMatch(.*)*',
      redirect: "/404"
    }
  ]
})

export default router
