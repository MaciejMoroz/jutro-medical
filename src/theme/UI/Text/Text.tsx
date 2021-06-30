import styled, { css } from 'styled-components/macro';

// P
interface ParagraphProops {
  bold?: boolean;
}
export const Paragraph = styled.p<ParagraphProops>`
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.fs.md};
  font-weight: ${({ theme }) => theme.fw.regular};
  @media screen and (min-width: ${({ theme }) => theme.bp.tab}) {
    font-size: ${({ theme }) => theme.fs.lg};
  }
  @media screen and (min-width: ${({ theme }) => theme.bp.deskLG}) {
    font-size: ${({ theme }) => theme.fs.h6};
    margin-bottom: 16px;
  }
  ${({ bold }) =>
    bold &&
    css`
      font-weight: ${({ theme }) => theme.fw.bold};
    `};
`;
