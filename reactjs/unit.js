//https://github.com/ruanyf/react-testing-demo/blob/master/test/shallow1.test.js
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import App from './HelloComponent.js';
import {mount} from 'enzyme';


function shallowRender(Component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component/>);
  return renderer.getRenderOutput();
}

describe('Shallow Rendering', function () {
  it('Reactjs HelloComponent.js', function () {
    //const app = shallowRender(App,{initialCount:1});
    // component's shallow rendering has props.children
	//console.info(app.props);
	 const app=mount(<App/>);
     //console.info(app.html());
     expect(app.find('div.container').length).to.equal(1);
    //expect(app.props.children[0].props.children).to.equal('d');
  });
});

	describe("This is an exmaple suite", function() {
	  it("contains spec with an expectation", function() {
		expect(true).to.be.true;
		expect(false).to.be.false;
		expect(false).to.be.false;
	  });
	});
