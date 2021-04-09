import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue'
import Core from './core'

Vue.use(IonicVueRouter)
const router = new IonicVueRouter({
    mode: 'history',
    routes: [
        ...Core
    ]
})

export default router
