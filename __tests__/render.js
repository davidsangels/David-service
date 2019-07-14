import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../client/components/App.jsx';
import Carousel from '../client/components/Carousel.jsx';
import Gallery from '../client/components/Gallery.jsx';
import Enzyme from 'enzyme'
Enzyme.configure({disableLifecycleMethods: true});

describe ('App Test', () => {
    beforeEach(() => {
        const props =  {
          view: true,
          currentView: '',
          data: [],
        //   frontImages: [],
        //   mainImg: [{imgUrl: 'jjnujnub'}],
          page: 1,
          view: false,
          currentIndex: 0,
          offset: 1,
        }
      })

    it('maincontainer', () => {
    const component = mount(<App {...props}/>);
        const button = component.find('.container');
        button.simulate('click');
    });
    it('click secondary container changes view to true', () => {
        const mockcallback = jest.fn()
        const component = mount(<App />);
        const button = component.find('.mainImg');
        button.simulate('click');

    });
    it('Clicking image 1 changes view to true',() => {
        const component = mount(<App {...props}/>);
        const button = component.find('.secondary1');
        button.children().find('.img1').simulate('click');
        expect(component.state('view')).toBe(true);
    })
    it('Clicking image 2 changes view to true',() => {
        const component = mount(<App/>);
        const button = component.find('.secondary2');
        button.children().find('.img2').simulate('click');
        expect(component.state('view')).toBe(true);
    })
});

describe('Testing Gallery component', () => {
    it('test gallery left  button ', () => {

        const gallery = shallow(<Gallery/>);
        expect(gallery.exist('.left')).toEqual(true);
    });
    it('test gallery', () => {
        const component= shallow(<Gallery />);
        expect(component.find('.left')).toHaveLength(1);
    });
});


describe('Testing Carousel  component', () => {
    it('test gallery', () => {

        const component= shallow(<Carousel />);
        expect(component.find('.left')).toHaveLength(1)
    });
});

