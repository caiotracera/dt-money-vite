import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;

    input {
      flex: 1;
      border-radius: 6px;
      border: 0;
      background-color: ${theme.colors['gray-900']};
      color: ${theme.colors['gray-300']};

      padding: 1rem;

      &::placeholder {
        color: ${theme.colors['gray-500']};
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;

      padding: 1rem;
      background: transparent;
      border: 1px solid ${theme.colors['green-300']};
      color: ${theme.colors['green-300']};
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;
      transition: background, border, color 0.2s;

      &:hover {
        background: ${theme.colors['green-500']};
        border: 1px solid ${theme.colors['green-500']};
        color: ${theme.colors.white};
      }
    }
  `}
`;
