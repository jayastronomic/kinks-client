
export default function authUser(state = {}, action){
    switch(action.type){
        case 'FETCH_AUTH_USER_SUCCESS':
           return action.authUser
        case 'FETCH_AUTH_USER_FAILED':
           return state
        default:
           return state 
    }
} 