import React, { useState, Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import axios from 'axios'
import GithubState from './context/github/GithubState';
import './App.css';

const App = ()=> {
  
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  





//Get Users Repos

const getUserRepos = async (username) =>{
  setLoading(true)
  const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id = 
  ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

  setRepos(res.data);
  setLoading(false)
}

// Search clear Users

// set Alert Users
 const showAlert = (msg, type) => {
//  this.setState({alert: {msg,type}});
setAlert({ msg, type });
 setTimeout(() => setAlert(null), 5000);
}


    // const {users, user, loading, repos} = this.state;
  return (
    <GithubState>
    <Router>
    <div className="App">
      <NavBar />
      <div className="container">
        <Alert alert={alert} />
         <Switch>
           < Route  
           exact path='/'  
           render={props =>(
           <Fragment>
              <Search 
                
                setAlert={showAlert}
           />
             <Users />
           </Fragment>
           )}
           />
           <Route exact path='/about'  component={About} />
           <Route  exact path='/user/:login' render={props =>(
             <User 
             {...props} 
             getUserRepos={getUserRepos} 
             repos={repos}
             />
           )} />
         </Switch>
      
      </div>
    </div>
    </Router>
    </GithubState>
  );

}
export default App;
