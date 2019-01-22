import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Status from './Status';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Status />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders initial message', () => {
  const wrapper = shallow(<Status />);
  const initialMessage = <p>This page will contain status information about the state of the application.</p>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
