export type Transaction = {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
};

export type TransactionContextType = {
  transactions: Transaction[];
};

export type TransactionsProviderProps = {
  children: React.ReactNode;
};
