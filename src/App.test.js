import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('should renders as expected', () => {
  // shallow cria uma arvore de elementos
  // cria os elementos na memória como se fosse no browse
  const wrapper = shallow(<App />);

  /**
   * que contenha e que seja verdadeiro
   */
  expect(wrapper.contains(<p>Jesus loves you!</p>)).toBe(true);
});