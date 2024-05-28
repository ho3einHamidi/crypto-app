const API_KEY = "CG-juCVKiKNmj4XHPCWEvaCRP4Z";
const BASE_URL = "https://api.coingecko.com/api/v3";
const getCoinList = (page, currency) => {
  return `${BASE_URL}/coins/markets?vs_currency=${currency}&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`;
};
export { getCoinList };

const searchCoinList = (querry) =>
  `${BASE_URL}/search?query=${querry}&x_cg_demo_api_key=${API_KEY}`;
export { searchCoinList };

const marketChart = (id, currency) => {
  return `${BASE_URL}/coins/${id}/market_chart?vs_currency=${currency}&days=7&x_cg_demo_api_key=${API_KEY}`;
};
export { marketChart };
