import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL as string
const API_URL_FILTER = process.env.REACT_APP_API_URL_FILTER as string

export interface FirebaseWrapper<T> {
  data: T
}

export interface User {
  username: string
  email: string
  token: string
}
export interface DataLogin {
  username: string
  password: string
}
export interface GetData {
  title: string
  category: string
}
export class UserService {
  static async getUsers() {
    const response = await axios.get<User[]>(API_URL)
    return response.data
  }

  static async login(data: DataLogin) {
    const response = await axios.post(API_URL + 'users/login', data)
    return response.data
  }

  static async register(userName: string, email: string, password: string) {
    const user = {
      name: userName,
      email: email,
      password: password
    }
    const response = await axios.post(API_URL + 'users/', user)
    return response.data
  }

  static async home(title: string, category: string) {
    const body = {
      title: title,
      category: category
    }
    const response = await axios.post(API_URL_FILTER + '/body', body)
    return response.data
  }
}
