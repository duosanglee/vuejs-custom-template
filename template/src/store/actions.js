import api from './api.js'

export default {
  test ({commit, state}) {
    api.test().then(data => {

    })
  }
}
