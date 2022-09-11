import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors['gray-900']};

    padding: 2.5rem 0 7.5rem;
  `}
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTransactionButton = styled.button`
  ${({ theme }) => css`
    height: 50px;
    border: 0;

    background: ${theme.colors['green-500']};
    color: ${theme.colors.white};
    font-weight: bold;

    padding: 0 1.25rem;

    border-radius: 6px;
    cursor: pointer;

    transition: background 0.2s;

    &:hover {
      background: ${theme.colors['green-700']};
    }
  `}
`;
