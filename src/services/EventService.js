import axios from 'axios'
// import NProgress from 'nprogress'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

<<<<<<< HEAD
export default{
    getEvents(perPage, page){
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
    },
    getEvent(id){
        return apiClient.get('/events/' +id)
    },
     postEvent(event) {
=======
export default {
  getEvents(perPage, page) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event) {
>>>>>>> ab57dfe5c0d89529210181331353320597644a7d
    return apiClient.post('/events', event)
  }
}
