import React from 'react';
import {
  CoinCointainer, CoinData, Image, CoinName, Price, TitleCoin, Porcentage,
} from './styles';

function Coin({
  name, image, symbol, rank, price, percentage,
}) {
  return (
    <CoinCointainer>
      <CoinData>
        <CoinName>
          <span>
            #
            {' '}
            {rank}
          </span>
          <Image src={image} atl={name} />
          <TitleCoin>{name}</TitleCoin>
        </CoinName>

        <Price>
          {price.toLocaleString()}
          {' '}
          MXN
        </Price>
      </CoinData>
      {percentage > 0
        ? (
          <Porcentage up>
            {percentage.toFixed(2)}
            %
          </Porcentage>
        )
        : (
          <Porcentage>
            {percentage.toFixed(2)}
            %
          </Porcentage>
        )}
    </CoinCointainer>

  );
}

export default Coin;
