import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe('Deve renderizar um campo de input', () => {
  test('', () => {
    render(<Formulario />);
    const fieldText = screen.getByPlaceholderText('Digite um valor');
    expect(fieldText).toBeInTheDocument();
    /* testando campo input */
  });

  test(' com o type number', () => {
    render(<Formulario />);
    const fieldText = screen.getByPlaceholderText('Digite um valor');
    expect(fieldText).toHaveAttribute('type', 'number');
    /* testando se o campo do input é do tipo número */
  });

  test(' que pode ser preenchido', () => {
    render(<Formulario />);
    const fieldText = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(fieldText, '50');
    expect(fieldText).toHaveValue(50);
    /* testando se existe um campo a ser preenchido*/
  });
});

test('Deve chamar um evento de onSubmit ao clicar em realizar transação', () => {
    const realizarTransacao = jest.fn(); //utilizado para mocar a função ja que ela não está sendo executada nesse ambiente
    render(<Formulario realizarTransacao={realizarTransacao} />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(realizarTransacao).toHaveBeenCalledTimes(1)
    /* testando se o evento de submit foi chamado pelo menos uma vez*/
  });