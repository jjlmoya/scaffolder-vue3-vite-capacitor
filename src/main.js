import Vue from 'vue'
import AppVue from './App.vue'
import store from './store'
import router from './router'
import { Plugins } from '@capacitor/core'
const { App } = Plugins
Vue.prototype.Screen = window.screen

console.log(App)
if (process.env.VUE_APP_ENV === 'production') {
    // PRODUCTION ONLY CODE
}

new Vue({
    router,
    store,
    mounted () {},
    render: h => h(AppVue)
}).$mount('#app')
