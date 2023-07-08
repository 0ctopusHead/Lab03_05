import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutViewVue from '../views/AboutView.vue'
import PassengerLayoutView from '@/views/event/PassengerLayoutView.vue'
import PassengerDetailView from '@/views/event/PassengerDetailView.vue'
import EventAirlineView from '@/views/event/EventAirlineView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import NetworkErrorView from '../views/NetworkErrorView.vue'
import EditPassengerDetailView from '@/views/event/EditPassengerDetailView.vue'
import  NProgress  from 'nprogress'
import { usePassengerStore } from '@/stores/passenger'
import PassengerService from '@/services/PassengerService'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: (route) => ({page: parseInt(route.query?.page as string || '1')})
    },
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    },
    {
      path: '/passenger/:id',
      name: 'passenger-layout',
      component: PassengerLayoutView,
      beforeEnter: (to) => {
        const id : number = parseInt(to.params.id as string)
        const passengerStore = usePassengerStore()
        const airlineStore = usePassengerStore()
        return PassengerService.getEventById(id)
        .then((respond)=>{
          passengerStore.setPassenger(respond.data)
          PassengerService.getAirlineById(respond.data.airlineId)
          .then((respond) => {
            airlineStore.setAirline(respond.data)
          })
        }).catch((error) => {
          if(error.request && error.request.status === 404){
            return {
              name: '404-resource',
              params: {resource: 'passenger'}
            }
          }
          else{
            return { name: 'network-error' }
          }
        })

      },
      children: [
        {
          path: '',
          name: 'passenger-detail',
          component: PassengerDetailView
        },
        {
          path: 'airline/:id',
          name: 'airline-detail',
          component: EventAirlineView
        },
        {
          path: '/passenger/:id/edit',
          name: 'passenger-edit',
          component: EditPassengerDetailView
        }
      ]
    },
    {
      path: '/404/:resouce',
      name: '404-resource',
      component: NotFoundView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkErrorView
    }
  ],
  scrollBehavior(to, from , savePosition) {
    if(savePosition) {
      return savePosition
    } else{
      return {top: 0}
    }
  }
})
router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})
export default router
