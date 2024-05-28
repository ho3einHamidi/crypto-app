import { useEffect, useState } from "react";
import { searchCoinList } from "../../Services/cryptoApi";
import { Oval } from "react-loader-spinner";
import styles from "./SearchBox.module.css";
function SearchBox({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const changeHanlder = (e) => {
    setCurrency(e.target.value);
  };
  useEffect(() => {
    const controller = new AbortController();
    setCoins([]);
    if (!text) {
      setIsLoading(false);
      return;
    }
    const searchData = async () => {
      try {
        const res = await fetch(searchCoinList(text), {
          signal: controller.signal,
        });
        const json = await res.json();
        if (json.coins) {
          setIsLoading(false);

          console.log(json.coins);
          setCoins(json.coins);
        } else {
          alert(json.status.error_message);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          alert(error.message);
        }
      }
    };
    setIsLoading(true);
    searchData();
    return () => controller.abort();
  }, [text]);
  return (
    <div className={styles.searchBox}>
      <input
        onClick={() => setIsResultOpen(true)}
        onChange={(e) => setText(e.target.value)}
        type="text"
        name="serach"
        id="search"
        placeholder="Search"
      />
      <select value={currency} onChange={(e) => changeHanlder(e)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
      </select>
      {(!!coins.length || isLoading) && (
        <div className={styles.searchResult}>
          {isLoading && (
            <div className={styles.oval}>
              <Oval
                width="32px"
                height="32px"
                strokeWidth="2"
                color="#3874ff"
              />
            </div>
          )}
          {!isLoading &&
            coins.map((coin) => {
              return (
                <li key={coin.id}>
                  <img src={coin.thumb} alt={coin.name} />
                  <p>{coin.name}</p>
                </li>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default SearchBox;
