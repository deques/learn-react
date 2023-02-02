import React from "react";
import { useState, useEffect } from "react";

function Comic() {
  const [loading, setLoading] = useState(true);
  const [strips, setStrips] = useState([]);
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
    fetch(
      "https://cors-anywhere.herokuapp.com/https://www.oglaf.com/feeds/rss/"
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setStrips(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Comic</h1>
      {loading ? <strong>Loading...</strong> : null}
      {!loading ? (
        <>
          {/* <select onChange={onCurrencyChange}>
            <option>Select a currency</option>
            {strips.map((strip) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
              </option>
            ))}
          </select>
          <br />
          <input type="text" value={value} onChange={onChange} />
          <input type="text" value={value / conversion} disabled /> */}
        </>
      ) : null}
    </div>
  );
}
export default Comic;
