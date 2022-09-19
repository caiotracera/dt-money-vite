import { Header } from '@/components/Header';
import { SearchForm } from '@/components/SearchForm';
import { Summary } from '@/components/Summary';

import { useTransactions } from '@/contexts/TransactionsContext';

import * as S from '@/pages/Transactions/styles';

export function Transactions() {
  const { transactions } = useTransactions();

  return (
    <div>
      <Header />
      <Summary />
      <S.TransactionsWrapper>
        <SearchForm />
        <S.TransactionTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>
                  <S.PriceHighlight type={transaction.type}>
                    {transaction.price}
                  </S.PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </S.TransactionTable>
      </S.TransactionsWrapper>
    </div>
  );
}
