import TableRow from "../TableRow/TableRow";

function TableCoin({ coins }) {
  console.log(coins);
  return (
    <div>
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
    </div>
  );
}

export default TableCoin;
