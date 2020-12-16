import styled, { css } from 'styled-components';
import { darken } from 'polished';
import media from 'styled-media-query';

const getSecondTypeGradientColor = (theme, firstType, secondType) =>
  secondType ? theme.typeBg[secondType] : darken(0.3, theme.typeBg[firstType]);

export const CardWrapper = styled.div`
  ${({ theme, firstType, secondType }) => css`
    width: 100%;
    max-width: 1200px;
    max-height: 800px;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    border-radius: ${theme.border.radius};
    margin: ${theme.spacing.xxsmall};
    padding: ${theme.spacing.xxsmall};
    box-shadow: 4px 4px 14px 0.2px ${theme.colors.black};
    background: linear-gradient(
      to bottom right,
      ${theme.typeBg[firstType]},
      ${getSecondTypeGradientColor(theme, firstType, secondType)}
    );

    ${media.lessThan('small')`
      border-radius: 0;
    `}
  `}
`;

export const PokemonName = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.white};
    text-transform: uppercase;
  `};
`;

export const PokemonNumber = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
  `};
`;

export const MainSection = styled.section`
  ${({ theme }) => css`
    height: 300px;
    width: 100%;
    margin: ${theme.spacing.xxsmall};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `};
`;

export const MainBgText = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: ${theme.spacing.xxlarge};
    align-items: flex-end;
    opacity: 0.15;

    p {
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.uuularge};
      color: ${theme.colors.white};
      text-transform: uppercase;
      animation: fadeIn ease 6s;
    }

    ${media.lessThan('medium')`
        margin-right: 0;

      p {
        font-size: ${theme.font.sizes.uularge};
      }
    `}

    ${media.lessThan('small')`
      margin-right: 0;
      align-items: center;
      margin-top: ${theme.spacing.xxxlarge};

      p {
        margin-top: ${theme.spacing.xxxsmall};
        font-size: ${theme.font.sizes.ularge};
      }

      display: none;
    `}
  `};
`;

export const PokemonSprite = styled.img.attrs({
  alt: 'Pokemon Sprite',
})`
  height: 320px;
  position: absolute;
  animation: fadeIn ease 2s;
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
