import React from 'react';
import { shallow, mount, render } from 'enzyme'
import App from '../client/components/App.jsx';


describe('First React component test with Enzyme', () => {

  it('state of 1', () => {

    const wrapper = shallow( <App/>);
    const state = wrapper.state().test
    expect(state).toEqual(1)
})
});
