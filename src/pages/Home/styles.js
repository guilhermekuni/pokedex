import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 ${theme.spacing.xxxlarge};

    ${media.lessThan('large')`
      padding: 0 ${theme.spacing.medium};
    `}

    ${media.lessThan('small')`
      padding: 0;
    `}
  `}
`;
