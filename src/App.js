import React from 'react';
import TodoList from './TodoList';
import './App.css';

const App = () => {

	return(
		<div className="App" >
			<header className="header">Todo App Using React Hooks</header>
			<TodoList />
			<footer className="footer">Made by @Mankind_ Copyright &copy; 2020</footer>
		</div>
	);
}

export default App