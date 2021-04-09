const path = '/api/v1/app'

export default axios => ({
    version () {
        return axios.get(`${path}/version`)
    }
})
