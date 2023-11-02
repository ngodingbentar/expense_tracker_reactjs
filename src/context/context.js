import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{ amount: 50000000, category: 'Gaji', type: 'Pemasukan', date: '2020-11-16', id: '44c68123-5b86-4cc8-b915-bb9e16cebe6a' }, { amount: 2250000, category: 'Investasi', type: 'Pemasukan', date: '2020-11-16', id: '33b295b8-a8cb-49f0-8f0d-bb268686de1a' }, { amount: 5000000, category: 'Investasi', type: 'Pemasukan', date: '2020-11-13', id: '270304a8-b11d-4e16-9341-33df641ede64' }, { amount: 1230000, category: 'Belanja', type: 'Pengeluaran', date: '2020-11-16', id: '0f72e66e-e144-4a72-bbc1-c3c92018635e' }, { amount: 500000, category: 'Tagihan', type: 'Pengeluaran', date: '2020-11-13', id: 'c5647dde-d857-463d-8b4e-1c866cc5f83e' }, { amount: 5000000, category: 'Liburan', type: 'Pengeluaran', date: '2020-11-13', id: '365a4ebd-9892-4471-ad55-36077e4121a9' }, { amount: 50000, category: 'Investasi', type: 'Pemasukan', date: '2020-11-23', id: '80cf7e33-fc3e-4f9f-a2aa-ecf140711460' }, { amount: 500000, category: 'Tabungan', type: 'Pemasukan', date: '2020-11-23', id: 'ef090181-21d1-4568-85c4-5646232085b2' }, { amount: 400000, category: 'Tabungan', type: 'Pemasukan', date: '2020-11-23', id: '037a35a3-40ec-4212-abe0-cc485a98aeee' }];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Pengeluaran' ? acc - currVal.amount : acc + currVal.amount), 0);

  return (
    <ExpenseTrackerContext.Provider value={{
      balance,
      transactions,
      deleteTransaction,
      addTransaction,
    }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};