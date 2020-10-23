
export default function authUser(state = {}, action){
    switch(action.type){
         case 'FETCH_AUTH_USER_SUCCESS':
           return action.authUser
         case 'REMOVE_AUTH_USER':
           return action.authUser
         default:
           return state 
    }
} 