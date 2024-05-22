import { useEffect, useState } from "react";
import { getCoinList } from "../../Services/cryptoApi";
import TableCoin from "../TableCoin/TableCoin";
function HomePage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
    };
    getData();
  }, []);
  return (
    <div>
      <TableCoin coins={coins} />
    </div>
  );
}

export default HomePage;
