var React = require('react');
class HelloComponent extends React.Component {
  render() {
    return (
      <h1>HelloComponent {this.props.name}!</h1>
    );
  }
}

export default HelloComponent;

