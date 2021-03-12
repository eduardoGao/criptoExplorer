/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Main = styled.main`
  background: ${({ theme: { color } }) => color.gradient};
  min-height: 100vh;
  padding: 1.5em 0;
`;

export const TitleMain = styled.h1`
  color: ${({ theme: { color } }) => color.primary};
  // margin: 1em;
  text-align: center;
  text-transform: uppercase;
`;

export const Subtitle = styled.h4`
  color: ${({ theme: { color } }) => color.light};
  font-size: .8em;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  text-align: center;
  margin: 2em auto;
`;

export const Input = styled.input`
  background: transparent;
  padding: 1em 1.5em;
  border: 1px solid ${({ theme: { color } }) => color.secondary};
  border-radius: 8px;

  &::placeholder {
    color: ${({ theme: { color } }) => color.light};
    opacity: .7;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: .9em;
  }
`;
