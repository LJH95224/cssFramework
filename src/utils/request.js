/*
 * @Description: axios 封装
 * @Date: 2021-09-07 20:18:55
 * @FilePath: \cssFramework\src\utils\request.js
 */
import axios from 'axios'
// import Toast from 'vant/lib/toast'
import { store } from '@/store'
import router from '../router'

const service = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  withCredentials: false
})

service.interceptors.request.use(config => {
  if (store.state.token) {
    config.headers.token = store.state.token
  }
  return config
})

service.interceptors.response.use(response => {
  const { data } = response
  if (data.status === 200) {
    // Toast.clear()
    console.log('Toast.clear()')
    return data
  } else if (data.status === 403) {
    // go login
    console.log('go login')
    // Toast({
    //   message: '去登录',
    //   onClose () {
    //     router.push({ path: '/me/login' })
    //   }
    // })
    router.push({ path: '/me/login' })
  } else {
    // error
    // Toast()
    console.log(data.msg)
    return Promise.reject(new Error(data.msg || 'Error'))
  }
})

export default service
