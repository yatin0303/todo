export default {
    async addUser(context, payload) {
        
    //   console.log(payload)
      const response = await fetch(
        `https://todo-db5eb-default-rtdb.asia-southeast1.firebasedatabase.app/users/${payload.id}.json`,
        {
          method: "PUT",
          body: JSON.stringify(payload),
        }
      );
      console.log(response);
    },
    async getUser(context,payload){
        const response=await fetch( `https://todo-db5eb-default-rtdb.asia-southeast1.firebasedatabase.app/users/${payload.id}.json`)
          const responseData=await response.json();
          console.log(responseData);
      }
  };
  
  
  