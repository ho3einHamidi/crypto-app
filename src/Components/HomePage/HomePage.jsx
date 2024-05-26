import { useEffect, useState } from "react";
import { getCoinList } from "../../Services/cryptoApi";
import TableCoin from "../TableCoin/TableCoin";
import Pagination from "../Pagination/Pagination";
import SearchBox from "../SearchBox/SearchBox";
function HomePage() {
  const [coins, setCoins] = useState([]);
  const [newCoins, setNewCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("USD");
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
  const searchHandler = () => {};
  return (
    <div>
      <SearchBox currency={currency} setCurrency={setCurrency} />
      <Pagination page={page} setPage={setPage} />
      <TableCoin coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
