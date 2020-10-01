import React, { useState, useReducer, useEffect } from 'react';

export function About() {
	return(
		<div className="container">
			<p>This is a Todo List App with <strong>CRUD</strong> functions made with <em>React Hooks</em></p>
			<p>For more information, check out the <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Documentation</a> on <em>React Hooks</em></p>
		</div>
	)
}
export function Contact() {
	return(
		<div className="container">
			<p>This is a TODO LIST App with <strong>CRUD</strong> functions made with <em>React Hooks</em></p>
			<p style={{marginTop:"20px"}}>Here are the links to contact the developer on <a href="https://github.com/mankindofficial" target="_blank" rel="noopener noreferrer">Github 
			</a>, <a href="https://www.instagram.com/mankind_of_africa/" target="_blank" rel="noopener noreferrer">Instagram 
			</a>, <a href="https://www.facebook.com/opeyemi.makinde.1217/" target="_blank" rel="noopener noreferrer">Facebook 
			</a> and <a href="https://twitter.com/mankindOfAfrica" target="_blank" rel="noopener noreferrer">Twitter</a> or send a mail to <em>@mankindofficial1@gmail.com</em></p>
		</div>
	)
}
export function TodoList() {

	const [name, setName] = useState('');
	const [todos, dispatch] = useReducer(reducer, []);
	function reducer(todos, action) {
		switch(action.type){
			case('start'):
				return action.payload.data;
			case('add'):
				return [...todos, newTodo(action.payload.title)];
			case('toggle'):
				return todos.map(todo => {
					if(todo.id === action.payload.id){
						return { ...todo, completed: !todo.completed }
					}
					return todo;
				});
			case('delete'):
				return todos.filter(todo => todo.id !== action.payload.id);
			default:
				return todos;
		}
	}

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
		.then(response => response.json())
		.then(data => dispatch({type:'start', payload:{data:data}}));
	}, [])

	function Todo({todo, dispatch}) {

		return(
			<div className="todo">
				<input type="checkbox"
					className="check"
					onClick={() => dispatch({type:'toggle', payload:{id:todo.id}})} />
				<span style={{color: todo.completed ? 'brown' : '', textDecoration: todo.completed ? 'line-through' : ''}}>{todo.title}</span>
				<input type="submit"
					className="del"
					onClick={() => {dispatch({type:'delete', payload:{id:todo.id}})}} 
					value="x"/>
			</div>
		);
	}

	function newTodo(title) {
		return {id:Math.random(), title:title, completed:false}
	}

	function handleSubmit(e) {
		e.preventDefault();
		name.length && dispatch({type:'add', payload: {title:name}});
		setName('');
	}

	return(
		<div className="todoList">
				{todos.map(todo => (
					<Todo key={Math.random()} todo={todo} dispatch={dispatch}/>
				))}
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Add New Todo Here..." className="addTodo" value={name} onChange={(e) => setName(e.target.value)}/>
					<input type="submit" className="submitTodo" value="Add Todo" onClick={handleSubmit}/>
				</form>
		</div>
	);
}
