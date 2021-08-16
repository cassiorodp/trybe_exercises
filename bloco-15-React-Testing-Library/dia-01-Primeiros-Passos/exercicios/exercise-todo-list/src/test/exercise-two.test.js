import React from 'react';
import { render, fireEvent, cleanup, screen, getByText } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />) // Caso precise de uma nova query adicione no object destructuring

    const inputTask = screen.getByLabelText('Tarefa:');
    const addTaskButton = screen.getByText('Adicionar');

    listTodo.forEach((task) => {
      fireEvent.change(inputTask, {target: {value: task}})
      fireEvent.click(addTaskButton)
    })

    listTodo.forEach((task) => {
      expect(screen.getByText(task)).toBeDefined()
    })
  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {

  })
})
