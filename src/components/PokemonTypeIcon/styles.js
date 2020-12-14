import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const IconWrapper = styled.div`
  ${({ theme, type }) => css`
    background: ${darken(0.075, theme.typeBg[type])};
    border-radius: 50%;
    padding: ${theme.spacing.xxsmall};
    margin: 0 ${theme.spacing.xxsmall};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1.25px 1.25px 2px ${theme.colors.black};
  `}
`;

export const TypeIcon = styled.img`
  height: 40px;
`;
