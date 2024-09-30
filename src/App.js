import { useEffect, useState } from "react";
import UnitConversion from "./UnitConversion";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState("");
  const [unit, setUnit] = useState(1);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onSelect = (event) => {
    if (event.target.value === "Select Coin") return;
    setCoin(event.target.value);
    const coinUnit = coins
      .filter((coin) => event.target.value.includes(coin.name))[0]
      .quotes.USD.price.toFixed(2);
    setUnit(coinUnit);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loadding...</strong>
      ) : (
        <div>
          <select onChange={onSelect}>
            <option key="">Select Coin</option>
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price.toFixed(2)}
                USD
              </option>
            ))}
          </select>
          <hr />
          <UnitConversion selectedCoin={coin} selectedCoinUnit={unit} />
        </div>
      )}
    </div>
  );
}

export default App;
