import { combineReducers } from 'redux';
import authUser from './authUser'
import loggedInStatus from './loggedInStatus'
import posts from './posts'
import showPostModal from './showPostModal'


export default combineReducers({
authUser,
loggedInStatus,
posts,
showPostModal
})