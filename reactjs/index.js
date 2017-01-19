
import React from 'react'
import ReactDOM from 'react-dom'
import HelloComponent from './HelloComponent.js'

require('./../public/components/bootstrap/dist/css/bootstrap.min.css');


class HelloMessage extends React.Component {
	render() {
	  return <div>Hello {this.props.name}</div>;
	}
}


ReactDOM.render(
  <HelloComponent initialCount={1} />,
  document.getElementById('app')
)