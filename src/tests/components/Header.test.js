import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

let startLogout, wrapper;

beforeEach(() => {
    startLogout = jest.fn();
    wrapper = shallow(<Header startLogout={startLogout} />);    
});

test('should render Header correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});

// Some test examples
// test('should render Header correctly', () => {
//     const wrapper = shallow(<Header />);
//     expect(wrapper.find('h1').length).toBe(1);
//     expect(wrapper.find('h1').text()).toBe('Expensify');
// });

// Example for the built in react-test-renderer
// import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
// import Header from '../../components/Header';

// test('should render Header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// });