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

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // state={
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false,
  //   alert: null
    
  // };
  // async componentDidMount(){
  //   this.setState({loading:true})
  //    const res = await axios.get(`https://api.github.com/users?client_id = 
  //    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );
  
  //    this.setState({ users: res.data, loading: false})
  // }


  // Search github Users
   const searchUsers = async text => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id = 
     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );
  
    //  this.setState({ users: res.data.items, loading: false})
    setUsers(res.data.items);
     setLoading(false)
  };


// get single GithubUsers

const getUser = async (username) =>{
 setLoading(true)
  // this.setState({loading: true});
  const res = await axios.get(`https://api.github.com/users/${username}?client_id = 
  ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

  // this.setState({ user: res.data, loading: false})
  setUser(res.data);
  setLoading(false)
}

//Get Users Repos

const getUserRepos = async (username) =>{
  setLoading(true)
  // this.setState({loading: true});
  const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id = 
  ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

  // this.setState({ repos: res.data, loading: false})
  setRepos(res.data);
  setLoading(false)
}

// Search clear Users
  const clearUsers =()=> {
setUsers([])
setLoading(false)
    // this.setState({users:[], loading:false})
  }

// set Alert Users
 const showAlert = (msg, type) => {
//  this.setState({alert: {msg,type}});
setAlert({ msg, type });
 setTimeout(() => setAlert(null), 5000);
}


    // const {users, user, loading, repos} = this.state;
  return (
    
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
                searchUsers = {searchUsers} 
                clearUsers = {clearUsers}
                showClear={users.length > 0 ? true : false}
                setAlert={showAlert}
           />
             <Users loading={loading} users={users}/>
           </Fragment>
           )}
           />
           <Route exact path='/about'  component={About} />
           <Route  exact path='/user/:login' render={props =>(
             <User 
             {...props} 
             getUser={getUser} 
             getUserRepos={getUserRepos}
             user={user} 
             repos={repos}
             loading={loading}/>
           )} />
         </Switch>
      
      </div>
    </div>
    </Router>
  );

}
export default App;
