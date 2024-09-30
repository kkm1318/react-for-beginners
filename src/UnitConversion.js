import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const UnitConversion = ({ selectedCoin, selectedCoinUnit }) => {
  const [coin, setCoin] = useState(0);
  const onChange = (event) => {
    setCoin(event.target.value);
  };
  useEffect(() => {
    setCoin(0);
  }, [selectedCoin]);
  return (
    <div>
      <div>
        <label htmlFor="usd">USD: </label>
        <input
          value={coin}
          id="usd"
          type="number"
          placeholder="Enter USD"
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="coin">Coin: </label>
        <input
          value={Math.round(coin * selectedCoinUnit).toFixed(2)}
          id="coin"
          type="number"
          placeholder="Enter selected coin"
          disabled
          onChange={onChange}
        />
      </div>
    </div>
  );
};

UnitConversion.propTypes = {
  selectedCoin: PropTypes.string.isRequired,
};

export default UnitConversion;
