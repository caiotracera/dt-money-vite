import { createContext, useContext, useEffect, useState } from 'react';

import { api } from '@/lib/axios';
import {
  Transaction,
  TransactionContextType,
  TransactionsProviderProps,
  CreateTransactionInput,
} from '@/contexts/TransactionsContext/types';

const TransactionContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        q: query,
        _sort: 'createdAt',
        _order: 'desc',
      },
    });

    setTransactions(response.data);
  }

  async function createTransaction({
    description,
    category,
    price,
    type,
  }: CreateTransactionInput) {
    const response = await api.post('/transactions', {
      description,
      category,
      price,
      type,
      createdAt: new Date(),
    });

    setTransactions((state) => [response.data, ...state]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionContext);
}
