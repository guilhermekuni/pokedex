import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 ${theme.spacing.xxxlarge};
    background: ${theme.colors.white};
  `}
`;
