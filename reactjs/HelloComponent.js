var React = require('react');
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class HelloComponent extends React.Component {
	 constructor(props) {
		super(props);
		this.state = {count: props.initialCount};
	  }
	  tick() {
		this.setState({count: this.state.count + 1});
	  }
	  render() {		
		return <div>Hello {this.props.name}</div>;		
	  }
/*
  render() {
    return (
		<div>
		    <ButtonToolbar>
				
				<Button>Default</Button>

			
				<Button bsStyle="primary">Primary</Button>

				
				<Button bsStyle="success">Success</Button>

				
				<Button bsStyle="info">Info</Button>

				
				<Button bsStyle="warning">Warning</Button>

				
				<Button bsStyle="danger">Danger</Button>

				
				<Button bsStyle="link">Link</Button>
			  </ButtonToolbar>
		   <br/>
		  <h1>HelloComponent {this.props.name}! <Button bsStyle="success">Success</Button></h1>
		</div>
    );
  }
  */
}
/*
HelloComponent.propTypes = { initialCount: React.PropTypes.number };
HelloComponent.defaultProps = { initialCount: 0 };
*/

export default HelloComponent;

