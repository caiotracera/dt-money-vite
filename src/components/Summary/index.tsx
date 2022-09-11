import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';

import * as S from '@/components/Summary/styles';

export function Summary() {
  return (
    <S.Wrapper>
      <S.Card>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>R$ 17.400,00</strong>
      </S.Card>

      <S.Card>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>R$ 1.259,00</strong>
      </S.Card>

      <S.Card balance="positive">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>R$ 16.141,00</strong>
      </S.Card>
    </S.Wrapper>
  );
}
