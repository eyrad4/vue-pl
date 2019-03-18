import axios from 'axios'
import { URL, TOKEN} from './config'

export const HTTP = axios.create({
  baseURL: URL,
  headers: {
    'X-Auth-Token': TOKEN
  }
})