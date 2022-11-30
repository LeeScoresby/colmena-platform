export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.user;
  },

  getProject(state) {
    return localStorage.getItem('project');
  }
}

export const state = () => ({
  project: null,
})

export const mutations = {
  setProject(state, value) {
    localStorage.setItem('project', value);
    state.project = value;
  }
}
