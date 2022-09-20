import { Header } from '@/components/Header';
import { SearchForm } from '@/components/SearchForm';
import { Summary } from '@/components/Summary';
import { useContextSelector } from 'use-context-selector';

import { TransactionContext } from '@/contexts/TransactionsContext';
import { dateFormatter, priceFormatter } from '@/utils/formatter';

import * as S from '@/pages/Transactions/styles';

export function Transactions() {
  const transactions = useContextSelector(
    TransactionContext,
    (context) => context.transactions,
  );

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
                    {priceFormatter.format(transaction.price)}
                  </S.PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </S.TransactionTable>
      </S.TransactionsWrapper>
    </div>
  );
}
