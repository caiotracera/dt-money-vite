export type Transaction = {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
};

export type CreateTransactionInput = {
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
};
export type TransactionContextType = {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (transaction: CreateTransactionInput) => Promise<void>;
};

export type TransactionsProviderProps = {
  children: React.ReactNode;
};
