
// action type

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_FILTER = 'SET_FILTER'

export const Filters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

// action creators

export function addTodo(text) {
	return {
		type: ADD_TODO,
		text
	}
}

export function toggleTodo(index) {
	return {
		type: TOGGLE_TODO,
		index
	}
}

export function setFilter(filter) {
	return {
		type: SET_FILTER,
		filter
	}
}


	
export const getThenShow = (dispatch, getState) => {
	  const url = '/json/';

	  fetch(url).then(response => {
		dispatch({
		  type: 'SHOW_MESSAGE_FOR_ME',
		  message: response.json(),
		});
	  }, e => {
		dispatch({
		  type: 'FETCH_DATA_FAIL',
		  message: 'sdf',
		});
	  });
	};





