export const fetchAuthUserSuccess = (obj) => {
  return {
    type: 'FETCH_AUTH_USER_SUCCESS',
    authUser: obj
  }
}

export const removeAuthUser = (obj) => {
  return {
    type: 'REMOVE_AUTH_USER',
    authUser: obj
  }

}

export const isLoggedIn = (bool) => {
  return {
    type: 'LOGGED_IN',
    bool: bool
  }
  
}


