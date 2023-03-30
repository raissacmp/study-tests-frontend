import { calculaNovoSaldo } from './index';

describe('Quando eu realizo uma transação', () => {
  test('que é um depósito, o saldo deve aumentar', () => {
    const transaction = {
      transacao: 'Depósito',
      valor: 50,
    };

    const newSaldo = calculaNovoSaldo(transaction, 100);

    expect(newSaldo).toBe(150);
  });

  test('que é um transferencia, o saldo deve diminuir', () => {
    const transaction = {
      transacao: 'Transferência',
      valor: 50,
    };

    const newSaldo = calculaNovoSaldo(transaction, 100);

    expect(newSaldo).toBe(50);
  });

});

test('Deve retornar o valor do saldo atualizado com o rendimento', () => {
  const incomeCalculation = jest.fn((saldo) => saldo + saldo * 0.005);
  const saldo = 100;

  const newSaldo = incomeCalculation(saldo);

  expect(newSaldo).toBe(100.5);
});
