import { combineReducers } from 'redux';
import authUser from './authUser'
import loggedInStatus from './loggedInStatus'


export default combineReducers({
authUser,
loggedInStatus
})