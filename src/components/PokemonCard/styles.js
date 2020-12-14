import styled, { css } from 'styled-components';

const getSecondTypeGradientColor = (theme, firstType, secondType) =>
  secondType ? theme.typeBg[secondType] : theme.typeBg[firstType];

export const CardWrapper = styled.div`
  ${({ theme, firstType, secondType }) => css`
    height: 800px;
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    border-radius: ${theme.border.radius};
    margin: ${theme.spacing.xsmall};
    padding: ${theme.spacing.xsmall};
    box-shadow: 6px 6px 14px 0.2px;
    background: linear-gradient(
      to bottom right,
      ${theme.typeBg[firstType]},
      ${getSecondTypeGradientColor(theme, firstType, secondType)}
    );
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

export const PokemonSprite = styled.img.attrs({
  alt: 'Pokemon Sprite',
})`
  ${({ theme }) => css`
    min-height: 300px;
    max-height: 350px;
    margin: ${theme.spacing.small} ${theme.spacing.xxsmall};
  `};
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
