import styled, { css } from 'styled-components';

export const SearchBarWrapper = styled.form`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    height: 50px;
    width: 100%;
    max-width: 1200px;
    margin: ${theme.spacing.xxsmall} 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacing.xxsmall} ${theme.spacing.small};
    box-shadow: 4px 4px 14px 0.2px ${theme.colors.gray};
  `};
`;

export const SearchBar = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    background: transparent;
    border: 0;
    width: 100%;
  `}
`;
