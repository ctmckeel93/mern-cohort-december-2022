import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { CountContext } from '../context/CountContext';

function Header() {
	const { currentUser, setCurrentUser, usersArray } = useContext(AppContext);
	const { currentCount, setCurrentCount } = useContext(CountContext);

	const onClickUserHandler = () => {
		if (currentUser.name === "Sally Smith") {
			setCurrentUser(usersArray[0]);
		}
		else {
			setCurrentUser(usersArray[1]);
		}
	}

	const onClickCountHandler = () => {
		setCurrentCount(currentCount + 1);
	}

	return (
		<div>
			<h1>Welcome {currentUser.name}!</h1>
			<p>{currentUser.motto}</p>
			<p>Current Count: {currentCount}</p>
			<p>
				<button className='m-2' onClick={ () => onClickUserHandler() }>Change User</button>
				<button className='m-2' onClick={ () => onClickCountHandler() }>Increment Header Count</button>
			</p>

			<Link to="/" className="m-5">Counters</Link>
			<Link to="/use_context_count" className="m-5">Context Count</Link>
			<Link to="/use_reducer_count" className="m-5">Reducer Count</Link>
			<Link to="/use_reducer_list" className="m-5">Reducer List</Link>
			<Link to="/register" className="m-5">Registration</Link>
		</div>
	)
}

export default Header;