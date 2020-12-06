import EventService from '@/services/EventService.js'

export const namespaced = true

export const state = {
  events: [],
  eventsTotal: 0,
<<<<<<< HEAD
  event: {}
=======
  event: {},
  perPage: 3
>>>>>>> ab57dfe5c0d89529210181331353320597644a7d
}

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENTS_TOTAL(state, eventsTotal) {
    state.eventsTotal = eventsTotal
  },
  SET_EVENT(state, event) {
    state.event = event
  }
}

export const actions = {
  createEvent({ commit, dispatch }, event) {
    return EventService.postEvent(event)
      .then(() => {
        commit('ADD_EVENT', event)
<<<<<<< HEAD
=======
        commit('SET_EVENT', event)
>>>>>>> ab57dfe5c0d89529210181331353320597644a7d
        const notification = {
          type: 'success',
          message: 'Your event has been created!'
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem creating your event: ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
        throw error
      })
  },
<<<<<<< HEAD
  fetchEvents({ commit, dispatch }, { perPage, page }) {
    EventService.getEvents(perPage, page)
=======
  fetchEvents({ commit, dispatch, state }, { page }) {
    return EventService.getEvents(state.perPage, page)
>>>>>>> ab57dfe5c0d89529210181331353320597644a7d
      .then(response => {
        commit('SET_EVENTS_TOTAL', parseInt(response.headers['x-total-count']))
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching events: ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
      })
  },
<<<<<<< HEAD
  fetchEvent({ commit, getters, dispatch }, id) {
=======
  fetchEvent({ commit, getters, state }, id) {
    if (id == state.event.id) {
      return state.event
    }

>>>>>>> ab57dfe5c0d89529210181331353320597644a7d
    var event = getters.getEventById(id)

    if (event) {
      commit('SET_EVENT', event)
<<<<<<< HEAD
    } else {
      return EventService.getEvent(id)
        .then(response => {
          commit('SET_EVENT', response.data)
        })
        .catch(error => {
          const notification = {
            type: 'error',
            message: 'There was a problem fetching event: ' + error.message
          }
          dispatch('notification/add', notification, { root: true })
        })
=======
      return event
    } else {
      return EventService.getEvent(id).then(response => {
        commit('SET_EVENT', response.data)
        return response.data
      })
>>>>>>> ab57dfe5c0d89529210181331353320597644a7d
    }
  }
}
export const getters = {
  getEventById: state => id => {
    return state.events.find(event => event.id === id)
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> ab57dfe5c0d89529210181331353320597644a7d
