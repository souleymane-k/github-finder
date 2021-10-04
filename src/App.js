import React, { Component} from 'react'
import NavBar from './components/layout/NavBar'
import Users from './components/user/Users'
import Search from './components/user/Search'
import axios from 'axios'
import './App.css';

class App extends Component {
  state={
    users:[],
    loading:false
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

  clearUsers =()=> this.setState({users:[], loading:false})

  render(){

    const {users, loading} = this.state;
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Search 
        searchUsers = {this.searchUsers} 
        clearUsers = {this.clearUsers}
        showClear={users.length > 0 ? true : false}
        setAlert={this.setAlert}
        />
      <Users loading={loading} users={users}/>
      </div>
      
    </div>
  );
}
}
export default App;
