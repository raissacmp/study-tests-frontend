import { render, screen } from '@testing-library/react';
import Transacoes from './index'
import estilos from '../Extrato.module.css'

test('Deve renderizar o mesmo componente com props atualizadas', () => {
    const transacao = {
        transacao: 'Depósito',
        valor: 100
    }
    const {rerender} = render(<Transacoes estilos={estilos} transacao={transacao} />)
    const transationType = screen.getByTestId('tipoTransacao')
    const transationValue = screen.getByTestId('valorTransacao')
   
    expect(transationType).toHaveTextContent('Depósito')
    expect(transationValue).toHaveTextContent('R$ 100')

    const newTransacao = {
        transacao: 'Transferência',
        valor: 50
    }

    rerender(<Transacoes estilos={estilos} transacao={newTransacao} />)
    const newTransationType = screen.getByTestId('tipoTransacao')
    const newTransationValue = screen.getByTestId('valorTransacao')

    expect(newTransationType).toHaveTextContent('Transferência')
    expect(newTransationValue).toHaveTextContent('- R$ 50')
})