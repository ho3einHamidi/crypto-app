import { Oval } from "react-loader-spinner";

import TableRow from "../TableRow/TableRow";
import styles from "./TableCoin.module.css";
function TableCoin({ coins, isLoading }) {
  console.log(coins);
  return (
    <div className={styles.container}>
      {isLoading ? (
        <Oval height="24" width="24" radius="9" color="#3874ff" />
      ) : (
        <table>
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
