import { render, screen } from '@testing-library/react';
import Extrato from './index'

test('Deve renderizar uma lista de transações', () => {
    const transacoes = [
        {
            transactions: 'Depósito',
            value: 100
        }
    ]
    render(<Extrato transacoes={transacoes} />)
    const list = screen.getByRole('listitem')
    expect(list).toBeInTheDocument()
})