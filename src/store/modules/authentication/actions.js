
export default{
     
    async signup(context,payload){
      
        const key=process.env.VUE_APP_API_KEY
        
        const body={
            email:payload.email,
            password:payload.password,
            returnSecureToken:true

        }
        
        const response= await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`,{
            method:'POST',
            body:JSON.stringify(body)
        })
        const responseData= await response.json();
        const userData={id:responseData.localId,...payload}
        delete userData.password
        context.dispatch('users/addUser',userData)
        if (!response.ok) {
            const error = new Error(responseData.error.message||'Please check your information')
            throw error
        }
     

        
        localStorage.setItem('token',responseData.idToken)
        localStorage.setItem('localid',responseData.localId)
      

        context.commit('setdata', {
            idToken: responseData.idToken,
            userid: responseData.localId,
            
        });
        
    },
    async signin(context,payload){
        const key=process.env.VUE_APP_API_KEY 
        
        const body={
            email:payload.email,
            password:payload.password,
            returnSecureToken:true

        }
        const response= await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`,{
            method:'POST',
            body:JSON.stringify(body)
        })
        const responseData=await response.json();
       
        if (!response.ok) {
            const error = new Error('Please check your information')
            throw error
        }
      
        localStorage.setItem('token',responseData.idToken)
        localStorage.setItem('localid',responseData.localId)
        
     

        context.commit('setdata', {
            idToken: responseData.idToken,
            userid: responseData.localId,
            
        });
        
    },
    trylogin(context){
       
        const token = localStorage.getItem('token')
        const localid = localStorage.getItem('localid')
      
        if(token&&localid){
           
            context.commit('setdata', {
                idToken: token,
                userid: localid,
            })

        }

    },
    logout(context) {
        localStorage.removeItem('mode')
        localStorage.removeItem('token')
        localStorage.removeItem('localid')
        localStorage.removeItem('tokenExpiration');

     

        context.commit('logout', {
            idToken: null,
            expiresIn: null,
            localId: null,
            login: false
        })

    },
    loadSnackbar(context){
        context.commit('loadSnackbar')
    }
    
}