import React, { useState, useReducer, useEffect } from 'react';

function TodoList() {

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
				<span style={{color: todo.completed ? 'brown' : 'green', textDecoration: todo.completed ? 'line-through' : ''}}>{todo.title}</span>
				<input type="submit" 
					className="del"
					onClick={() => {dispatch({type:'delete', payload:{id:todo.id}})}} 
					value="x"/>
			</div>
		);
	}

	function newTodo(title) {
		return {id:Date.now(), title:title, completed:false}
	}

	function handleSubmit(e) {
		e.preventDefault();
		dispatch({type:'add', payload: {title:name}});
		setName('');
	}

	return(
		<div className="todoList">
			{todos.map(todo => (
					<Todo key={Math.random()} todo={todo} dispatch={dispatch}/>
			))}
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Add New Todo Here..." className="addTodo" value={name} onChange={(e) => setName(e.target.value)}/>
			</form>
		</div>
	);
}

export default TodoList;
