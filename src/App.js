import React, { useState } from 'react';
import { About, Contact, TodoList } from './Pages';
import './App.css';

const App = () => {

	function PageNavigation() {

		const [reference, setReference] = useState("Todo-list");
		const li = document.querySelectorAll("li");
		li.forEach(item => {
			(reference === item.innerHTML)
			?	item.classList.add("active")
			:	item.classList.remove("active")
		})

		const setRef = (e) => {
			setReference(e.target.innerHTML)
		}

		return(
			<div className="pages">
				<nav>
					<span className="header">Todo App Using React Hooks</span>
					<ul>
						<li onClick={setRef} className="active">Todo-list</li>
						<li onClick={setRef}>About</li>
						<li onClick={setRef}>Contact</li>
					</ul>
				</nav>
				<h3>{reference}</h3>
				{(reference === "About") 
				? <About/>
				:(reference === "Todo-list")
				? <TodoList/>
				:(reference === "Contact")
				? <Contact/>
				:<h4>Oops! Its our good old 404 error</h4>}
			</div>
		);
	}

	return(
		<div className="App" >
			<PageNavigation/>
			<footer className="footer">Made by @Mankind_ Copyright &copy; 2020</footer>
		</div>
	);
}

export default App;
