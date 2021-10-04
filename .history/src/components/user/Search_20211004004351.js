import React, { Component } from 'react'

export class Search extends Component {
      state = {
          text: ''
      };

      onChange = (e)=>{
        // this.setState({text: e.target.value});
        this.setState({[e.target.name]: e.target.value});
        // this.setState({text: ''});
      }

      onSubmit=(e)=>{
        e.preventDefault();
        this.props.searchUsers(this.state.text)
        this.setState({text: ''});

      }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}  className='form'>
                    <input 
                    type="text" 
                    name="text" 
                    placeholder="search Users..."  
                    value ={this.state.text} 
                    onChange={this.onChange}
                    />
                    <input  type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
            </div>
        )
    }
}

export default Search
