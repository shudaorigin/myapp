//https://github.com/ruanyf/react-testing-demo/blob/master/test/shallow1.test.js
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import App from './HelloComponent.js';

function shallowRender(Component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component/>);
  return renderer.getRenderOutput();
}

describe('Shallow Rendering', function () {
  it('App\'s title should be Todos', function () {
    const app = shallowRender(App);
    // component's shallow rendering has props.children
    expect(app.props.children[0].type).to.equal('div');
    //expect(app.props.children[0].props.children).to.equal('d');
  });
});