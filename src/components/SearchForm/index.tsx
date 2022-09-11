import { MagnifyingGlass } from 'phosphor-react';

import * as S from '@/components/SearchForm/styles';

export function SearchForm() {
  return (
    <S.Wrapper>
      <input type="text" placeholder="Busque por transações" />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </S.Wrapper>
  );
}
