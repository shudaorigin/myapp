
import { combineReducers } from 'redux'

import { ADD_TODO, TOGGLE_TODO, SET_FILTER, Filters,TODOS_AJAX } from './actions.js'

const { SHOW_COMPLETED } = Filters

function todos(state = [{text:123,complete:true}], action) {
	
    //console.info("--------------"+action);
	switch(action.type){
		case ADD_TODO:
			return [
				...state,
				{
					text: action.text,
					completed: false
				}
			]
		case TOGGLE_TODO:
			return state.map((todo, index) => {
				if(index == action.index){
					return Object.assign({}, todo, {
						completed: !todo.completed
					})
				}
				return todo
			})
		default:
			return state
	}
}

function filter(state = SHOW_COMPLETED, action) {
	switch(action.type){
		case SET_FILTER:
			return action.filter
		default:
			return state
	}
}

const todoApp = combineReducers({
	todos,
	filter
})

export default todoApp