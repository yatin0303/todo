export default {
  async addTask(context, payload) {
    const task = {
      task: payload.task,
      completed: payload.completed,
      favourite: payload.favourite,
    };
    console.log(payload.task);
    const response = await fetch(
      `https://todo-db5eb-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${payload.user}.json`,
      {
        method: "POST",
        body: JSON.stringify(task),
      }
    );
    context.commit('addSingleTask',task)
    console.log(response);
  },
  async getTask(context,payload){
      const response=await fetch( `https://todo-db5eb-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${payload}.json`)
        const responseData=await response.json();
        let taskArray=[];
        for(let t in responseData){
            let todo={
                task:responseData[t].task,
                completed:responseData[t].completed,
                favourite:responseData[t].favourite
            }
            taskArray.push(todo)
            
        }
        
        context.commit('addNewTask',taskArray);

    }
};


