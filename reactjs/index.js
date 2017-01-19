import React from 'react'
import ReactDOM from 'react-dom'
import HelloComponent from './HelloComponent.js'

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}


ReactDOM.render(
  <HelloComponent name="Sebastian" />,
  document.getElementById('app')
)