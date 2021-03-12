/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CoinCointainer = styled.section`
  background: ${({ theme: { color } }) => color.dark};
  color: ${({ theme: { color } }) => color.light};
  min-height: 40px;
  max-width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em auto;
  padding: 5px 8px;
  font-size: .8em;
  border-radius: 5px;

  @media (min-width: 768px) {
    font-size: 1em;
    max-width: 90%;
  }

  @media (min-width: 1024px) {
    max-width: 80%;
  }
`;

export const CoinData = styled.section`
  min-width: 80%;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    min-width: 70%;
  }

  @media (min-width: 1024px) {
    min-width: 60%;
  }
`;

export const Image = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: 0 10px;
`;

export const CoinName = styled.div`
  // background: slateblue;
  display: flex;
  min-width: 135px;
  align-items: center;
  // justify-content: space-between;
`;

export const TitleCoin = styled.h2`
  color: white;
  font-size: .8em;
`;

export const Price = styled.div`
  // background: slateblue;
  display: flex;
  align-items: center;
  min-width: 115px;
  font-size: .9em;
`;

export const Porcentage = styled.span`
  font-weight: bold;
  font-size: .9em;
  color: ${(props) => (props.up ? '#30DE84' : '#F1357B')}
`;
