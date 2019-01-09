import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders initial message from backend', () => {
  const wrapper = shallow(<App />);
  const initialMessage = <p>The backend says: nothing.</p>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
