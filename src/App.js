import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coins from './components/Coins';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Coin from './routes/Coin';

function App() {
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  //using use state hooks
  const [coins, setCoins] = useState([]);

  //using useEffect hook to fetch coin data
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        {/* using props to send coin response and router to home page*/}
        <Route path='/' element={<Coins coins={coins} />} />
        {/* url page to coin */}
        <Route path='/coin' element={<Coin />}>
          {/* It will route to specific coin id */}
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
