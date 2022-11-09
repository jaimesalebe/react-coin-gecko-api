import React from "react";
import CoinRow from "./CoinRow";

function TableCoins({ coins, search }) {
  const filteredcoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) |
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const titles = ["#", "Coin", "Price", "Price change", "24h volume"];

  return (
    <table className="table table-dark   mt-4 table-hover">
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredcoins.map((coin, index) => (
          <CoinRow coin={coin} key={index} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
}

export default TableCoins;
