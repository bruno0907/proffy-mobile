import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-proffy.herokuapp.com'
})

export default api