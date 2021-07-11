export default{
    addNewTask(state,payload){
        
        state.tasks=payload
    },
    addSingleTask(state,payload){
        state.tasks.push(payload);
    }
}