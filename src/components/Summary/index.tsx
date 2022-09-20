import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';

import * as S from '@/components/Summary/styles';
import { priceFormatter } from '@/utils/formatter';
import { useSummary } from '@/hooks/useSummary';

export function Summary() {
  const { summary } = useSummary();

  return (
    <S.Wrapper>
      <S.Card>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </S.Card>

      <S.Card>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </S.Card>

      <S.Card balance="positive">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </S.Card>
    </S.Wrapper>
  );
}
