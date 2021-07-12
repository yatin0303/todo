export default{
    addUsers(state,payload){
        payload.forEach(element => {
            state.users.push(element)
        });
        
    }
}