import axios from 'axios'

export class Test {
  test () {
    return axios.get('http://localhost:8000')
  }
}
