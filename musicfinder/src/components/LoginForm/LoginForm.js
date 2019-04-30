import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import OAuthGoogle from './OAuthGoogle.js'
import {AuthForm, Input} from '../styledComps';

const LoginForm = (props) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	
	return(
		<>
			<h1>Login</h1>
			<AuthForm onSubmit = {e => e.preventDefault()}>
				<Input value = {username} type = 'text' placeholder='username' onChange = {e => setUsername(e.target.value)}/>
				<Input value = {password} type = 'password' placeholder='password' onChange = {e => setPassword(e.target.value)}/>
				<Input bgColor = '#EB5757' type = 'submit' value = 'Login' onClick = {() => handleLogin(username, password)}/>		
			</AuthForm>
			<OAuthGoogle/>
			
			<Link to="/register">Don't have an account? Register Here!</Link>
		</>
	)
	

	async function handleLogin(username, password) {
		const url = process.env.REACT_APP_BE_URL || "https://fantabulous-music-finder.herokuapp.com";

		if(username.length === 0 || password.length === 0){
			alert('Please provide username and password');
			return;
		}
		
		try {
			const response = await axios.post(`${url}/api/login`, {
				username: username,
				password: password
			});
			alert('successfully logged in')
			localStorage.setItem('authToken', response.data.token);
		} catch (error) {
			alert(error);
		}
	}
}

export default LoginForm;