import styled, { css } from 'styled-components';

export const CardWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
    height: 800px;
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    border-radius: ${theme.border.radius};
    margin: ${theme.spacing.xsmall};
    padding: ${theme.spacing.xsmall};
  `}
`;

export const PokemonName = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.white};
  `};
`;

export const PokemonNumber = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    margin-top: ${theme.spacing.xxsmall};
  `};
`;
