import { useEffect, useState, useCallback } from 'react';
import { createContext } from 'use-context-selector';

import { api } from '@/lib/axios';
import {
  Transaction,
  TransactionContextType,
  TransactionsProviderProps,
  CreateTransactionInput,
} from '@/contexts/TransactionsContext/types';

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        q: query,
        _sort: 'createdAt',
        _order: 'desc',
      },
    });

    setTransactions(response.data);
  }, []);

  const createTransaction = useCallback(
    async ({ description, category, price, type }: CreateTransactionInput) => {
      const response = await api.post('/transactions', {
        description,
        category,
        price,
        type,
        createdAt: new Date(),
      });

      setTransactions((state) => [response.data, ...state]);
    },
    [],
  );

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
