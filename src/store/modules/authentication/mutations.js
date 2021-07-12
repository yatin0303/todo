export default{
    setdata(state,payload){
           
        state.idToken=payload.idToken,
        state.userid=payload.userid
        
  
     
      
    },
    logout(state,payload){
        state.idToken=payload.idToken,
        state.expiresIn=payload.expiresIn,
        state.userid=payload.localId
        state.login=payload.login
        window.location.reload()
    },
    loadSnackbar(state){
        state.snackbar=!state.snackbar
        
    }
}