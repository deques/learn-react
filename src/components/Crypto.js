import React from "react";
import { useState, useEffect } from "react";

function Crypto() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState(100);
  const [conversion, setConv] = useState(1);

  const onCurrencyChange = (event) => {
    setConv(event.target.value);
  };

  const onChange = (event) => {
    if (value !== 0) {
      setValue(event.target.value);
    } else setConv(0);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The coins ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      {!loading ? (
        <>
          <select onChange={onCurrencyChange}>
            <option>Select a currency</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} {coin.symbol}: {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <br />
          <input type="text" value={value} onChange={onChange} />
          <input type="text" value={value / conversion} disabled />
        </>
      ) : null}
    </div>
  );
}
export default Crypto;
