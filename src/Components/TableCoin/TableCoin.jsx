import { Oval } from "react-loader-spinner";

import TableRow from "../TableRow/TableRow";
import styles from "./TableCoin.module.css";
function TableCoin({ coins, isLoading }) {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <Oval height="48" width="48" radius="9" color="#3874ff" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => {
              return <TableRow key={coin.id} coin={coin} />;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;
