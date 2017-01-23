
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import AddTodo from './AddTodo.jsx'
import TodoList from './TodoList.jsx'
import TodoFilter from './TodoFilter.jsx'

import { addTodo, toggleTodo, setFilter, Filters , getThenShow} from './actions.js'

class App extends Component {

	ajaxClick() {
		ajaxFun();
	}
	
	render() {
		/*
		// ES5
		var user = this.props.user,  
			post = this.props.post;
		Becomes...
		// ES6
		const { user, post } = this.props;  
		*/

       	const { dispatch, filteredTodos, filter } = this.props
		return (
			<div>
			    <button onClick={()=>dispatch(getThenShow)}>Add</button>
				<AddTodo onAddClick={(text) => dispatch(addTodo(text))} />
				<TodoList todos={filteredTodos} onToggleClick={(index) => dispatch(toggleTodo(index))} />
				<TodoFilter filter={filter} onFilterChange={(filter) => dispatch(setFilter(filter))} />
			</div>	 
		)
	}

}

function filterTodos(todos, filter) {
	switch(filter) {
		case Filters.SHOW_ALL: 
			return todos;
		case Filters.SHOW_COMPLETED: 
			return todos.filter(todo => todo.completed)
		case Filters.SHOW_ACTIVE: 
			return todos.filter(todo => !todo.completed)
	}
}

function select(state) {
	
	return {
		filteredTodos: filterTodos(state.todos, state.filter),
		filter: state.filter
	}
}

export default connect(select)(App)

