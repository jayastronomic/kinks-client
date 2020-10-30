export default function posts(state = [], action) {
    switch(action.type){
        case 'FETCH_POST_SUCCESS':
            return action.posts
        default: 
            return state
    }
}