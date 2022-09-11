import styled, { css, DefaultTheme } from 'styled-components';

import { CardProps } from '@/components/Summary/types';

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`;

const cardModifier = {
  positive: (theme: DefaultTheme) => css`
    background: ${theme.colors['green-700']};
  `,
  negative: (theme: DefaultTheme) => css`
    background: ${theme.colors['red-700']};
  `,
};

export const Card = styled.div<CardProps>`
  ${({ theme, balance }) => css`
    background: ${theme.colors['gray-600']};

    border-radius: 6px;

    padding: 2rem;

    header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      color: ${theme.colors['gray-300']};
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
    }

    ${!!balance && cardModifier[balance](theme)}
  `}
`;
