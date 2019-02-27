import React, { useState } from 'react';
const axios = require('axios');
axios.defaults.withCredentials = true;

function Authenticate() {
	const [value, setValue] = useState({
		username: '',
		password: '',
	});

	const handleChange = e => {
		e.preventDefault();
		setValue({
			...value,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = e => {
		e.preventDefault();
		let user = {
			username: value.username,
			password: value.password,
		};

		axios
			.post('http://localhost:5000/api/login', user)
			.then(res => console.log(res))
			.catch(err => console.log(err));
	};

	return (
		<form>
			<input
				name="username"
				placeholder="username"
				value={value.username}
				onChange={e => handleChange(e)}
			/>
			<input
				name="password"
				placeholder="password"
				value={value.password}
				onChange={e => handleChange(e)}
			/>
			<button onClick={e => handleSubmit(e)}>Login</button>
		</form>
	);
}

export default Authenticate;
