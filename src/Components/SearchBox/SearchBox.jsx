import { useEffect, useState } from "react";
import { searchCoinList } from "../../Services/cryptoApi";

function SearchBox({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const changeHanlder = (e) => {
    setCurrency(e.target.value);
  };
  useEffect(() => {
    const controller = new AbortController();
    if (!text) return;
    const searchData = async () => {
      try {
        const res = await fetch(searchCoinList(text), {
          signal: controller.signal,
        });
        const json = await res.json();
        if (json.coins) {
          console.log(json);
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
    searchData();
    return () => controller.abort();
  }, [text]);
  return (
    <div>
      <input
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
    </div>
  );
}

export default SearchBox;
