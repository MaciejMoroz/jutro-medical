import styled from 'styled-components';

export const StyledUl = styled.ul`
  list-style: none;
`;

export const StyledLi = styled.li`
  padding-top: ${({ theme }) => theme.space.base};
  padding-left: ${({ theme }) => theme.space.base};
  padding-bottom: ${({ theme }) => theme.space.base};
  text-indent: ${({ theme }) => -theme.space.base};
`;
