import { createRouter, createWebHashHistory } from 'vue-router'
import defaultView from '../views/defaultView.vue'
import queryView from '../views/queryView.vue'
import orderView from '../views/orderView.vue'
import notFoundView from '../views/notFoundView.vue'
import classView from '@/views/classView.vue'
import insuranceCalcView from '@/views/insuranceCalcView.vue'
import ktvCalcView from '@/views/ktvCalcView.vue'
import typeEditView from '../views/typeEditView.vue'
import foodIdView from '@/views/foodIdView.vue'
import aboutView from '@/views/aboutView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: "default",
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
    }, {
      path: '/food/:id',
      name: 'food',
      component: foodIdView,
    },
    {
      path: '/typeEdit',
      name: 'typeEdit',
      component: typeEditView
    },
    {
      path: '/insuranceCalc',
      name: 'insuranceCalc',
      component: insuranceCalcView
    },
    {
      path: '/ktvCalc',
      name: 'ktvCalc',
      component: ktvCalcView
    }, 
    {
      path: '/about',
      name: 'about',
      component: aboutView
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
router.afterEach((to, from) => {
  const area = document.querySelector('#client')
  if (area) area.scrollTop = 0
})
export default router
