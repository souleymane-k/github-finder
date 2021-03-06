import React , { useState }from 'react';
import PropTypes from 'prop-types';
import GithubContext from "../"


const Search = ({showClear, clearUsers, setAlert}) =>{
      
 const [text, setText] = useState('');
     

      const onChange = (e)=> setText(e.target.value);
        
      const onSubmit=(e)=>{
        e.preventDefault();
        if(text ===''){
            setAlert('Please enter something', 'light')

        } else{
            searchUsers(text)
            setText('');
        }
      };

    

        return (
            <div>
                <form onSubmit={onSubmit}  className='form'>
                    <input 
                    type="text" 
                    name="text" 
                    placeholder="search Users..."  
                    value ={text} 
                    onChange={onChange}
                    />
                    <input  type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {showClear &&  <button className=" btn btn-block" onClick={clearUsers}> Clear </button>}
            </div>
        )
   
}

Search.propTypes = {
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}

export default Search
