import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
  
  } from '../types';

  export default (state, action) =>{
      switch(action.type){
          case SET_LOADING:
              return(
                  
              )
        default:
            return state;
      }
  }