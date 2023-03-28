import { render, screen } from '@testing-library/react';
import Cabecalho from './index'


test('Deve renderizar o nome do usuário logado', () => {
render(<Cabecalho/>) //metodo para renderizar o componente
const userName = screen.getByText('Joana Fonseca Gomes') //screen realiza uma busca
expect(userName).toBeInTheDocument() //o expectverifica se o que eu busquei esta no documento
})