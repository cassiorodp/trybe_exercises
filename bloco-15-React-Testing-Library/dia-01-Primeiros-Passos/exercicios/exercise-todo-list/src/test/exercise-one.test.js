import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const {getByText} = render(<App />);

    expect(getByText('Adicionar')).toBeDefined()

  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    const {getByLabelText,queryByText} = render(<App />);

    const TASK = 'estudar'

    const inputTask = getByLabelText('Tarefa:');
    const inputButton = queryByText('Adicionar');
    expect(queryByText('estudar')).not.toBeInTheDocument()
    fireEvent.change(inputTask, {target: {value: TASK}})
    fireEvent.click(inputButton);
    expect(queryByText('estudar')).toBeInTheDocument()
  });
});
