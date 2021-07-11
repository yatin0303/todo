export default{

    async signup(context,payload){
      
        const key="AIzaSyD2KTsg2fLKgwYF2G-fXs7AJlHl6KNmHIE"
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
        
    },
    async signin(){
        const key="AIzaSyD2KTsg2fLKgwYF2G-fXs7AJlHl6KNmHIE" 
        const body={
            email:'yatinchugh1234@gmail.com',
            password:'asdfghjkl',
            returnSecureToken:true

        }
        const response= await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`,{
            method:'POST',
            body:JSON.stringify(body)
        })
        const responseData=await response.json();
        console.log(responseData);
        
    }
    
}