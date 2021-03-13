import React, { useState, useEffect } from 'react';
import Coin from '../coin';
import {
  Main, TitleMain, Subtitle, Label, Input, Loader, Button,
} from './styles';

function App() {
  const [coins, setCoins] = useState({
    data: [],
    loading: true,
    error: null,
  });

  const [search, setSearch] = useState('');

  useEffect(() => {
    try {
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        .then((response) => response.json())
        .then((data) => {
          setCoins({
            data,
            loading: false,
          });
        });
    } catch (error) {
      setCoins({
        error,
      });
    }
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.data.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Main>
      <TitleMain>Minimal Cripto</TitleMain>
      <Subtitle>Mantente al tanto de tus criptos favoritas</Subtitle>
      <Label htmlFor="searcher">
        <Input id="searcher" name="search" onChange={handleSearch} placeholder="Busca tu cripto preferida" />
      </Label>

      <section>
        {coins.loading && <Loader>Cargando...</Loader>}
        {coins.error && <span>{coins.error}</span>}
        {
          filteredCoins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              rank={coin.market_cap_rank}
              price={coin.current_price}
              percentage={coin.price_change_percentage_24h}
              marketCap={coin.market_cap}
            />
          ))
        }
      </section>
      {!coins.loading && <Button type="button">Cargar más</Button>}
    </Main>
  );
}

export default App;
