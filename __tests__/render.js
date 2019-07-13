import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App.jsx';


describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {

    const wrapper = shallow(<App/>);
    expect(wrapper.state(offset).value.to.eaqual(1)
});


