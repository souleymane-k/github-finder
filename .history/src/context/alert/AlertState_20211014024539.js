import React, { useReducer } from 'react';
import axios from 'axios';
import AlertContext from './AlertContext'
import AlertReducer from './alertReducer';

import {
  SET_ALERT,
  REMOVE_ALERT

} from '../types';

const AlertState = (props) =>{
  const initialState = null; 

  const [state, dispatch] = useReducer(AlertReducer, initialState);
   
  // Set Alert
  

 

  return <AlertContext.Provider
      value={{
        alert: state,
        : state.user,
        
      }}
  >
   {props.children}
  </AlertContext.Provider>


}

export default GithubState;