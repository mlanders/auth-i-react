import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/api/users')

			.then(users => {
				setUsers(users.data);
			})
			.catch(error => console.log(error));
	}, []);

	return (
		<div className="App">
			{users ? users.map(item => <p key={item.id}>{item.username}</p>) : <p>test</p>}
		</div>
	);
}

export default App;
