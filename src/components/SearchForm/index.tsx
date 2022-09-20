import { MagnifyingGlass } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { TransactionContext } from '@/contexts/TransactionsContext';

import { SearchFormInputs } from '@/components/SearchForm/types';
import { searchFormSchema } from '@/components/SearchForm/schema';
import * as S from '@/components/SearchForm/styles';
import { useContextSelector } from 'use-context-selector';

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionContext,
    (context) => context.fetchTransactions,
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query);
  }

  return (
    <S.Wrapper onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </S.Wrapper>
  );
}
