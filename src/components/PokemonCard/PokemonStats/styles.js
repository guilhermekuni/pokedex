import styled, { css } from 'styled-components';

export const StatsSectionWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    flex: 1;
    height: 200px;
    border-radius: ${theme.border.radius};
    background: ${theme.colors.lightGray};
    padding: ${theme.spacing.xsmall};
    margin: ${theme.spacing.xxsmall};
    justify-content: center;
    align-items: center;
    opacity: 0.5;

    strong {
      font-size: ${theme.font.sizes.xxsmall};
      line-height: ${theme.font.sizes.medium};
    }

    p {
      font-size: ${theme.font.sizes.xxsmall};
      line-height: ${theme.font.sizes.medium};
    }
  `}
`;

export const Column = styled.div`
  ${({ theme, alignment, flex }) => css`
    display: flex;
    flex-direction: column;
    flex: ${flex || 1};
    align-items: ${alignment};
    margin: 0 ${theme.spacing.xsmall};
  `};
`;
