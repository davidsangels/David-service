import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App.jsx';


describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {

    const wrapper = shallow(<App />)    );
    expects()
});

describe('App mount', () => {
  it('App mounts', () => {

    mount(<App />);    });
});

const wrapper = shallow(<App/> )
wrapper.istance(somemethod)
expect(wrapper.state().value).to.eaqual(1)