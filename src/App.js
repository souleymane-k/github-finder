import React, { Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Users from './components/user/Users'
import Search from './components/user/Search'
import Alert from './components/layout/Alert'
import axios from 'axios'
import './App.css';

class App extends Component {
  state={
    users:[],
    loading:false,
    alert: null
  }
  // async componentDidMount(){
  //   this.setState({loading:true})
  //    const res = await axios.get(`https://api.github.com/users?client_id = 
  //    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );
  
  //    this.setState({ users: res.data, loading: false})
  // }

  // Search github Users
  searchUsers = async text => {
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id = 
     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );
  
     this.setState({ users: res.data.items, loading: false})
     
  };
// Search clear Users
  clearUsers =()=> this.setState({users:[], loading:false})

// set Alert Users

setAlert = (msg, type)=>{
 this.setState({alert: {msg,type}});
 setTimeout(() => this.setState({alert: null}), 5000)
}

  render(){

    const {users, loading} = this.state;
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div className="container">
        <Alert alert={this.state.alert} />
        <Search 
        searchUsers = {this.searchUsers} 
        clearUsers = {this.clearUsers}
        showClear={users.length > 0 ? true : false}
        setAlert={this.setAlert}
        />
      <Users loading={loading} users={users}/>
      </div>
    </div>
    </Router>
  );
}
}
export default App;
