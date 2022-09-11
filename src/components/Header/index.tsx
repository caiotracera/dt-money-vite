import logoImg from '@/assets/images/logo.svg';

import * as S from '@/components/Header/styles';

export function Header() {
  return (
    <S.Wrapper>
      <S.Content>
        <img src={logoImg} alt="" />
        <S.NewTransactionButton type="button">
          Nova transação
        </S.NewTransactionButton>
      </S.Content>
    </S.Wrapper>
  );
}
