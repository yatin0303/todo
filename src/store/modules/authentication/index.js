  
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

export default{
    state(){
        return{
            idToken:null,
            userid:null,
            snackbar:false
        }
    },
    mutations,
    actions,
    getters
}