export default {
    async addUser(context, payload) {
        
      const url=process.VUE_APP_URL
       await fetch(
        `${url}/users/${payload.id}.json`,
        {
          method: "PUT",
          body: JSON.stringify(payload),
        }
      );
      
    },
    async getUser(context){
     
      const url=process.VUE_APP_URL
        const response=await fetch( `${url}/users.json`)
          const responseData=await response.json();
          const UserArray=[]
          for(let key in responseData){
            UserArray.push(responseData[key])
          }
          const user=context.getters.getUsers
          if(user.length===0){
          context.commit('addUsers',UserArray)
          }
      }
  };
  
  
  