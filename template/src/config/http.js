import axios from 'axios'
import qs from 'qs'
import {baseUrl} from '@/config/env'

axios.defaults.baseURL = baseUrl

// http request 拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code !== 1000) {
      alert(response.data.data)
    }
    return response
  },
  error => {
    alert('服务器错误')
    return Promise.reject(error.response.data)
  }
)

let post = (url, data) => {
  return axios({
    method: 'post',
    url,
    data: qs.stringify(data)
  })
}

let get = (url, params) => {
  return axios({
    method: 'get',
    url,
    params
  })
}

export default {post, get}
