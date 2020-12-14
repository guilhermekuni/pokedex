import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const IconWrapper = styled.div`
  ${({ theme, type }) => css`
    background: ${darken(0.125, theme.typeBg[type])};
    border-radius: 50%;
    padding: ${theme.spacing.xxsmall};
    margin: 0 ${theme.spacing.xxsmall};
  `}
`;

export const TypeIcon = styled.img`
  height: 40px;
`;
