import styled, { css, DefaultTheme } from 'styled-components';

import { PriceHighlightProps } from '@/pages/Transactions/types';

export const TransactionsWrapper = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TransactionTable = styled.table`
  ${({ theme }) => css`
    width: 100%;

    border-collapse: separate;
    border-spacing: 0 0.5rem;

    margin-top: 1.5rem;

    td {
      padding: 1.25rem 2rem;
      background: ${theme.colors['gray-700']};

      &:first-child {
        width: 50%;

        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  `}
`;

export const priceHighlightModifier = {
  income: (theme: DefaultTheme) => css`
    color: ${theme.colors['green-300']};
  `,
  outcome: (theme: DefaultTheme) => css`
    color: ${theme.colors['red-300']};

    &::before {
      content: '- ';
    }
  `,
};

export const PriceHighlight = styled.span<PriceHighlightProps>`
  ${({ theme, type }) => css`
    ${priceHighlightModifier[type](theme)}
  `}
`;
