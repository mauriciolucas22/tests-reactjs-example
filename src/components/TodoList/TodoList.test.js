import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './index';

const todos = [
  { id: 0, text: 'Jesus' },
  { id: 1, text: 'Christ' },
  { id: 2, text: 'God' },
  { id: 3, text: 'God' },
];

describe('TodoList component', () => {
  it('should render todos', () => {
    /**
     * Cria uma arvore de elementos em json na memoria
     */
    const wrapper = shallow(<TodoList />);
  
    // cria prropriedades
    //wrapper.setProps({})
  
    // cria state
    wrapper.setState({ todos });
  
    /**
     * o que esperar
     * 
     * find: procura o componente/elemento
     * 
     * jest: funções que vem depois do expect
     * enzyme: funções que vem depois do wrapper
     * 
     * Se o test não passar retorna as informações
     * a arvore em json
     */
  
    // console.log(wrapper.html());
    expect(wrapper.find('li')).toHaveLength(4)
    //expect(wrapper.find('li').length).toBe(3)
  });

  it('should be able to add new todo', () => {
    const wrapper = shallow(<TodoList />)

    wrapper.setState({ todos });

    wrapper.find('button').simulate('click');

    expect(wrapper.state('todos')).toHaveLength(5)
  });

  it('should be able ro remove todo', () => {
    const wrapper = shallow(<TodoList />);

    wrapper.setState({ todos });

    wrapper.find('li').first().simulate('click');

    expect(wrapper.state('todos')).not.toContain(todos[0]);
  });
})