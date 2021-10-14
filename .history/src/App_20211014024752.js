import React, { useState, Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = ()=> {
  const [alert, setAlert] = useState(null);


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
              <Search setAlert={showAlert}/>
             <Users />
           </Fragment>
           )}
           />
           <Route exact path='/about'  component={About} />
           <Route exact path='/user/:login' component={User} />
         </Switch>
      
      </div>
    </div>
    </Router>
    </GithubState>
  );

}
export default App;
