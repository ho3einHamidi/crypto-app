import chrtUp from "../../assets/icons/chart-up.svg";
import chrtDown from "../../assets/icons/chart-down.svg";

import styles from "./TableRow.module.css";
function TableRow({ coin }) {
  return (
    <tr>
      <td>
        <div className={styles["coin-name"]}>
          <img src={coin.image} />
          <p>{coin.symbol.toUpperCase()}</p>
        </div>
      </td>
      <td>{coin.id}</td>
      <td>${coin["current_price"].toLocaleString()}</td>
      <td
        className={
          coin["price_change_percentage_24h"] > 0
            ? styles.success
            : styles.error
        }
      >
        {coin["price_change_percentage_24h"].toFixed(2)}%
      </td>
      <td>{coin["total_volume"].toLocaleString()}</td>
      <td>
        <img
          src={coin["price_change_percentage_24h"] > 0 ? chrtUp : chrtDown}
          alt="chart"
        />
      </td>
    </tr>
  );
}

export default TableRow;
