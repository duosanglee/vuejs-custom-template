import api from './api.js'

export default {
  test ({commit, state}) {
    return api.test()
  }
}
