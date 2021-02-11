import axios from 'axios'

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_API || 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export {
  httpClient
}
