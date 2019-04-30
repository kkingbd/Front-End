import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, withRouter} from 'react-router-dom';

const baseUrl = process.env.REACT_APP_FE_URL || "https://fantabulous-music-finder.herokuapp.com";
class Register extends React.Component {
  constructor() {
    super();
    this.state = {
        username: '',
        email: '',
        password: '',
        
    };
  }
  
  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  };
  handleSubmit = e => {
    try {
      axios
        .post(`${baseUrl}/api/register`, this.state)
        .then(res => { 
          console.log("Registration Successful");
          this.props.history.push(`/login`);
      })
    } catch(err){
      console.log(err)
  }
}

  render(){
    return(
      <div>
      <RegBar className ='login-box'>
          <form  className ='login-form' onSubmit={e => e.preventDefault()}>
              <input 
                  className ='input-form'
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInput}
              />
              <input 
                  className='input-form'
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInput}
              />
              
              <input
                  className='input-form'
                  type= 'password'
                  placeholder= 'Password'
                  name='password'
                  value={this.state.password}
                  onChange={this.handleInput} 
              />  
              <button onClick={this.handleSubmit}> Register</button>           
          </form>
          <LoginLink to= '/login' >Already have an account? Log in Here!</LoginLink>
      </RegBar>
      </div>

    );
  }
}  
export default withRouter(Register);


const RegBar = styled.div`
    width: 300px;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
    .input-form{
        margin: 5px;
        width: 300px;
        height: 30px;
        border: none;
        border-radius: 5px;
        text-align:center;
    }
    button{
      width: 80px;
      height: 28px;
      margin : 18px;
      background: #EB5757;
      border-radius: 5px;
      color : white;
      
    }
    button:hover{
      background: black;
      cursor : pointer;
    }
`
const LoginLink = styled(Link)`
    font-size: 1rem;
    text-decoration: underline;
    color: white;
    text-decoration: none;
    margin: 6px auto;
    &:visited {
        color: red;
    }
`