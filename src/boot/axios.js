import Vue from 'vue'
import axios from 'axios'

let baseURL = 'http://127.0.0.1:8000'

axios.defaults.baseURL = baseURL + '/api'
    // axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'

export default async({ Vue }) => {
    Vue.prototype.$axios = axios
}