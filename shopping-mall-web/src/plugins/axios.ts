import axios from 'axios'

// axios 인스턴스를 생성합니다.
const instance = axios.create({
  baseURL: 'https://test.com',
  timeout: 1000,
})
