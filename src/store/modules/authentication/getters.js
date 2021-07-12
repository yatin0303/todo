export default{
    getuserid(state){
        return state.userid
    },
    getToken(state){
        return state.idToken
    },
    isAuthenticated(state) {
        return !state.token;
      },
  
    fullstate(state){
        return state
    },
    snackbar(state){
        return state.snackbar
    }
}