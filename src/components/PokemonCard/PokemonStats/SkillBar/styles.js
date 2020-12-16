import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ flex }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex: ${flex || 1};
  `};
`;

export const Bar = styled.div`
  ${({ theme }) => css`
    height: 12px;
    margin: 0 ${theme.spacing.small};
    width: 100%;
    background: #fff;
    border-radius: ${theme.border.radius};
  `}
`;

export const Skill = styled.div`
  ${({ theme, percent }) => css`
    @keyframes loadSkill {
      0% {
        width: 0;
      }
      100% {
        width: 1;
      }
    }

    height: 100%;
    width: ${percent}%;
    background: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    animation: loadSkill ease 1.5s;

    ${percent !== 100 &&
    css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `};
  `}
`;
