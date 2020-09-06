import React, { useState, useReducer, useEffect, useMemo, useCallback } from 'react';
// import './App2.css';


function Counter() {

	const [state, dispatch] = useReducer(reducer, {count:0})

	function reducer(state, action) {
		return (action.type === "increment") ? { count: state.count + 1 } : { count: state.count - 1 };
	}	

	function decrement() {
		dispatch({type: "decrement"});
	}
	function increment() {
		dispatch({type: "increment"});
	}

	return(
		<div>
			<input type="submit" value="-" onClick={decrement} />
			<span style={{color: (state.count >= 0) ? "blue" : "red"}}>{state.count}</span>
			<input type="submit" value="+" onClick={increment} />
		</div>
	);
}

function Pages() {
	const [reference, setReference] = useState('');
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${reference}?_limit=8`)
		.then(response => response.json())
		.then(data => setItems(data));
		console.log(reference);
		return () => {
			console.log('effect cleared');
		}
	}, [reference])

	return(
		<div>
			<div>
				<input type="submit" value="Posts" onClick={(e) => setReference(e.target.value)}/>
				<input type="submit" value="Users" onClick={(e) => setReference(e.target.value)}/>
				<input type="submit" value="Comments" onClick={(e) => setReference(e.target.value)}/>
			</div>
			<h2>{reference}</h2>
			{items.map((item, index) => {
				return <pre key={Math.random()}><span>{index+1}</span>{JSON.stringify(item)}</pre>
			})}
		</div>
	);
}

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
			<div>
				<span style={{color: todo.completed ? 'green' : 'brown'}}>{todo.title}</span>
				<input type="submit" 
					onClick={() => {dispatch({type:'toggle', payload:{id:todo.id}})}} 
					value="Toggle Complete"/>
				<input type="submit" 
					onClick={() => {dispatch({type:'delete', payload:{id:todo.id}})}} 
					value="Delete"/>
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
		<div className="Todo">
			<form onSubmit={handleSubmit}>
				<input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
			</form>
			{todos.map(todo => (
				<Todo key={Math.random()} todo={todo} dispatch={dispatch}/>
			))}
		</div>
	);
}

function Toggle() {

	const [number, setNumber] = useState(0);
	const [theme, setTheme] = useState(false);

	const toggleStyle = {
		width:'100px',
		height:'100px',
		display:'flex',
		alignItems:'center',
		justifyContent:'center',
		background: theme ? 'black' : 'white',
		color: theme ? 'white' : 'black'
	}

	const double = () => {
		return number*2
	}

	return(
		<div>
			<input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))}/>
			<input type="submit" value="Toggle" onClick={() => setTheme(!theme)} style={{display:'block'}}/>
			<div style={toggleStyle}>Toggle Space</div>
			<p>Number above * 2 = {double()}</p>
		</div>
	);
}

function App2(){
	return(
		<div style={{padding:'50px'}}>
			<Counter/>
			<Pages/>
			<TodoList/>
			<Toggle/>
		</div>
	);
}

export default App2;