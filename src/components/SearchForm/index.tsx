import { MagnifyingGlass } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SearchFormInputs } from '@/components/SearchForm/types';
import { searchFormSchema } from '@/components/SearchForm/schema';
import * as S from '@/components/SearchForm/styles';
import { useTransactions } from '@/contexts/TransactionsContext';

export function SearchForm() {
  const { fetchTransactions } = useTransactions();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    // eslint-disable-next-line no-promise-executor-return
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
