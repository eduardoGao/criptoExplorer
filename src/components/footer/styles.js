/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  color:  ${({ theme: { color } }) => color.light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme: { color } }) => color.secondary};
  background: linear-gradient(180deg, #a562fd 0%, #56306a 45%);
  // padding-top: 2em;
  margin-top: 4em;
`;

export const Name = styled.span`
  color: ${({ theme: { color } }) => color.primary};
`;
