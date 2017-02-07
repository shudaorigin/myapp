var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//var Animation = React.createClass({
class Animation extends Component {
 constructor() {
    super();
    this.state = {
      items: [
        {id: 1, name: 'Milk'},
        {id: 2, name: 'Yogurt'},
        {id: 3, name: 'Juice'},
        {id: 4, name: 'IceCream'}
      ]
    };

    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    if (evt.key === 'Enter') {
      const newItem = {id: Date.now(), name: evt.target.value};
      const newItems = this.state.items.concat(newItem);

      evt.target.value = '';
      this.setState({items: newItems});
    }
  }

  handleRemove(i) {
    const newItems = this.state.items;

    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    let shoppingItems = this.state.items.map((item, i) => (
      <div
        key={item.id}
        className="item"
        onClick={() => this.handleRemove(i)}
      >
      {item.name}
      </div>
    ));

    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          transitionAppear={true}
          transitionAppearTimeout={300}
        >
          {shoppingItems}
        </ReactCSSTransitionGroup>
        <input
          type="text"
          value={this.state.newItem}
          onKeyDown={this.handleChange}
        />
      </div>
    );
  }
}

var styles = StyleSheet.create({
   item:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginLeft:5,
    marginRight:5,
    marginTop:5,
    marginBottom:5,
  },
  image:{
    width:48,
    height:48,
  },
  text:{
    color:'#ffffff',
    alignItems:'center'
  }
});

export default Animation;