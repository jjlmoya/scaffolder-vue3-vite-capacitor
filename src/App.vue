<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
    import axios from '@/api/clients/axios'

    export default {
        name: 'App',
        components: { },
        async created () {
            this.addInterceptor()
        },
        methods: {
            addInterceptor () {
                // const accessToken = this.$store.getters['auth/accessToken']
                axios.interceptors.request.use((config) => {
                    const accessToken = this.$store.state.token.access_token
                    if (accessToken) config.headers.common.Authorization = `Bearer ${ accessToken }`
                    return config
                }, (error) => Promise.reject(error))

                axios.interceptors.response.use((response) => response, (error) => {
                    if (error.response.status === 401) this.$store.dispatch('auth/logout')
                    return Promise.reject(error)
                })
            }
        }
    }
</script>

<style lang="scss">
  @import "styles.scss";

  #app {
    font-family: var(--font-family);
  }
</style>
