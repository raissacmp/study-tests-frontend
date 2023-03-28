import { render, screen } from '@testing-library/react';
import Menu from './index'

test('Deve renderizar um link para a pagina inicial', () => {
    render(<Menu />)
    const linkInitialPage = screen.getByText('Inicial')
    expect(linkInitialPage).toBeInTheDocument()
})

test('Deve renderizar uma lista link para a pagina inicial', () => {
    render(<Menu />)
    const listOfLinks = screen.getAllByRole('link')
    expect(listOfLinks).toHaveLength(4)
})


test('Não deve realizar o link para extrato', () => {
    render(<Menu />)
    const linkExtract = screen.queryByText('Extrato')
    expect(linkExtract).not.toBeInTheDocument() 
    //verifica se algo realmente não existe
})