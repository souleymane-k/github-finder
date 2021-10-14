import React, { useReducer } from 'react';
import axios from 'axios';
import AlertContext from './AlertContext'
import AlertReducer from './alertReducer';

import {
  SET_ALERT,
  REMOVE_ALERT

} from '../types';

const ALERTState = (props) =>{
  const initialState = 

  const [state, dispatch] = useReducer(GithubReducer, initialState);
   
  //search users

  // Search github Users
  const searchUsers = async text => {
    setLoading();
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id = 
     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );
  
    dispatch({
      type:SEARCH_USERS,
      payload: res.data.items 
    })
   
  };


  //get user

  const getUser = async (username) =>{
    setLoading()
     const res = await axios.get(`https://api.github.com/users/${username}?client_id = 
     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );
   
    dispatch({
      type: GET_USER,
      payload: res.data 
    })
   }

  //get repos
  const getUserRepos = async (username) =>{
    setLoading()
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id = 
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );
      
    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
    
  }

  // clear users
  const clearUsers =()=> dispatch({type: CLEAR_USERS})

  //set loading

  const setLoading = () => dispatch({type: SET_LOADING });

  return <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading:state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
  >
   {props.children}
  </GithubContext.Provider>


}

export default GithubState;