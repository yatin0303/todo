
export default {
  async addTask(context, payload) {
    const task = {
      task: payload.task,
      completed: payload.completed,
      favourite: payload.favourite,
    };
    const token=context.rootGetters.getToken;
    const url=process.VUE_APP_URL
    const response = await fetch(
      `${url}/tasks/${payload.user}.json?auth=${token}`,
      {
        method: "POST",
        body: JSON.stringify(task),
      }
    );
    const responseData=await response.json();
  

    context.commit('addSingleTask',{id:responseData.name,...task})
    
  },
  async getTask(context,payload){
    const token=context.rootGetters.getToken;
    const url=process.VUE_APP_URL
      const response=await fetch( `${url}/tasks/${payload}.json?auth=${token}`)
        const responseData=await response.json();
        let taskArray=[];
        for(let t in responseData){
            let todo={
                id:t,
                task:responseData[t].task,
                completed:responseData[t].completed,
                favourite:responseData[t].favourite
            }
            taskArray.push(todo)
            
        }
        
        context.commit('addNewTask',taskArray);

    },
    async Update(context,payload){
      const url=process.VUE_APP_URL
      const token=context.rootGetters.getToken;
      await fetch( `${url}/tasks/${payload.user}/${payload.id}.json?auth=${token}`,{
        method:"PATCH",
        body:JSON.stringify({completed:payload.value})
      })
    
      
      
          
      
    }
};


