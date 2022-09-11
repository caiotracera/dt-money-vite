import { Header } from '@/components/Header';
import { Summary } from '@/components/Summary';

import * as S from '@/pages/Transactions/styles';

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionsWrapper>
        <S.TransactionTable>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <S.PriceHighlight type="income">R$ 12.000,00</S.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td>Hambúrguer</td>
              <td>
                <S.PriceHighlight type="outcome">R$ 59,00</S.PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
            <tr>
              <td>Aluguel do apartamento</td>
              <td>
                <S.PriceHighlight type="outcome">R$ 1.200,00</S.PriceHighlight>
              </td>
              <td>Casa</td>
              <td>27/03/2022</td>
            </tr>
          </tbody>
        </S.TransactionTable>
      </S.TransactionsWrapper>
    </div>
  );
}
