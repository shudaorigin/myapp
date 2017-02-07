
import React from 'react'

import { render } from 'react-dom'
import thunk from 'redux-thunk'
import { createStore , applyMiddleware} from 'redux'
import { Provider } from 'react-redux'


import { Router, Route, hashHistory,Link } from 'react-router'
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router'


import todoApp from './reducers.js'
import App from './App.jsx'
import Animation from './Animation.jsx'

function logger({ getState }) {
		
  return (next) => (action) => {
	
   // console.log('will dispatch', action)

    // 调用 middleware 链中下一个 middleware 的 dispatch。
    let returnValue = next(action)

    //console.log('state after dispatch', getState())

    // 一般会是 action 本身，除非
    // 后面的 middleware 修改了它。
    return returnValue
  }
}

//let store = createStore(todoApp)


function handleChange() {
  
  if(store.getState().todos.length<2){

  }
  else{
	  
  }
}




let store = createStore(
  todoApp,
  applyMiddleware(logger,thunk)
)

let unsubscribe = store.subscribe(handleChange);


var About = React.createClass({
  render: function () {
       return (
      <div>
        <h1>About</h1>
		<ul role="nav">
		  <li><Link to="/">Home</Link></li>
          <li><Link to="/App">App</Link></li>
        </ul>		
      </div>
	  )
  }
})

render(
	<Provider store={store}>
		<Router history={hashHistory}>
		  <Route path="/" component={Animation} />
		  <Route path="/App" component={App} />
		</Router>
	</Provider>,
	document.getElementById('todo')
)

/*
var Inbox = React.createClass({
  render: function () {
   return (
      <div>
        <h1>Inbox</h1>
		<ul role="nav">
		  <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Inbox">Inbox</Link></li>
        </ul>		
      </div>
	  )
  }
});

var Home = React.createClass({
  render: function () {
    //return <h2>Home</h2>;
	 return (
      <div>
        <h1>Home</h1>
		<ul role="nav">
		  <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Inbox">Inbox</Link></li>
        </ul>		
      </div>
    )
  }
});


render(
    (
	  <Router history={hashHistory}>
		 <Route path="/" component={Home}/>
		 <Route path="/About" component={About}/>
		 <Route path="/Inbox" component={Inbox}/>
	  </Router>
	),
	document.getElementById('todo')
)
*/