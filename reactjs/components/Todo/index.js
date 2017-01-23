
import React from 'react'

import { render } from 'react-dom'
import thunk from 'redux-thunk'
import { createStore , applyMiddleware} from 'redux'
import { Provider } from 'react-redux'

import todoApp from './reducers.js'
import App from './App.jsx'

function logger({ getState }) {
	
  console.info('logger-Middle-Plugin');
	
  return (next) => (action) => {
	  
	  console.info(next);
    console.log('will dispatch', action)

    // 调用 middleware 链中下一个 middleware 的 dispatch。
    let returnValue = next(action)

    console.log('state after dispatch', getState())

    // 一般会是 action 本身，除非
    // 后面的 middleware 修改了它。
    return returnValue
  }
}

//let store = createStore(todoApp)

let store = createStore(
  todoApp,
  applyMiddleware(logger,thunk)
)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('todo')
)