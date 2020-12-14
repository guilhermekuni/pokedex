import styled, { css } from 'styled-components';

export const StatsSectionWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 200px;
    border-radius: ${theme.border.radius};
    background: ${theme.colors.lightGray};
    padding: ${theme.spacing.xsmall};
    margin: ${theme.spacing.xxsmall};
    justify-content: center;
    align-items: center;
    opacity: 0.25;

    p {
      font-size: ${theme.font.sizes.xxsmall};
      line-height: ${theme.font.sizes.medium};
    }
  `}
`;
