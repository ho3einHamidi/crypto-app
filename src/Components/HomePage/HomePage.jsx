import { useEffect, useState } from "react";
import { getCoinList } from "../../Services/cryptoApi";
import TableCoin from "../TableCoin/TableCoin";
import Pagination from "../Pagination/Pagination";
import SearchBox from "../SearchBox/SearchBox";
import Chart from "../Chart/Chart";
function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("USD");
  const [chart, setChart] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(getCoinList(page, currency));
        const json = await res.json();
        setCoins(json);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [page, currency]);
  return (
    <div>
      <SearchBox currency={currency} setCurrency={setCurrency} />
      <TableCoin
        chart={chart}
        currency={currency}
        setChart={setChart}
        coins={coins}
        isLoading={isLoading}
      />
      <Pagination page={page} setPage={setPage} />
      {!!chart && <Chart chart={chart} setChart={setChart} />}
    </div>
  );
}

export default HomePage;
