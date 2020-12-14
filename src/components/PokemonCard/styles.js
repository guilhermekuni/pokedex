import styled, { css } from 'styled-components';
import { darken } from 'polished';

const getSecondTypeGradientColor = (theme, firstType, secondType) =>
  secondType ? theme.typeBg[secondType] : darken(0.3, theme.typeBg[firstType]);

export const CardWrapper = styled.div`
  ${({ theme, firstType, secondType }) => css`
    width: 100%;
    max-width: 1200px;
    max-height: 850px;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    border-radius: ${theme.border.radius};
    margin: ${theme.spacing.xxsmall};
    padding: ${theme.spacing.xsmall};
    box-shadow: 4px 4px 14px 0.2px ${theme.colors.gray};
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
    margin: ${theme.spacing.xxsmall};
  `};
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const TypeSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: row;
    padding: ${theme.spacing.xsmall};
    margin-top: ${theme.spacing.xxsmall};
    margin-left: ${theme.spacing.xsmall};
    margin-right: ${theme.spacing.xsmall};
  `}
`;
