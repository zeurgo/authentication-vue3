import axios from 'axios'
import router from '@/router'
import AuthService from './auth'

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_API || 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

httpClient.interceptors.request.use(config => {
  config.headers.common.Authorization = `Bearer ${window.localStorage.getItem('token')}`
  return config
})

httpClient.interceptors.response.use((response) => {
  return response
}, (error) => {
  const canThrowAnError = error.request.status === 0 ||
    error.request.status === 500

  if (canThrowAnError) {
    throw new Error(error.message)
  }

  if (error.response.status === 401) {
    router.push({ name: 'Home' })
  }

  return error
})

export default {
  auth: AuthService(httpClient)
}
