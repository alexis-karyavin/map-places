import { createStore } from 'vuex'

export default createStore({
  state: {
    userObjects: [
      {
        type: 'Feature',
        properties: {
          description: '<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
          icon: 'theatre'
        },
        geometry: {
          type: 'Point',
          coordinates: [-77.038659, 38.931567]
        }
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
