import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Authenticate from './Authenticate';

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const api = axios.create({
			withCredentials: true,
		});
		api.get('http://localhost:5000/api/users')

			.then(users => {
				setUsers(users.data);
			})
			.catch(error => console.log(error));
	}, []);

	return (
		<div className="App">
			<Authenticate />
			{users ? users.map(item => <p key={item.id}>{item.username}</p>) : <p>test</p>}
		</div>
	);
}

export default App;
