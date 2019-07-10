import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App.jsx';


describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {

    shallow(<App />)    );
});

describe('App mount', () => {
  it('App mounts', () => {

    mount(<App />);    });
});