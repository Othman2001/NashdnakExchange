import React from 'react';
import NavBar from '../components/NavBar.component';
import '../components/css/trade.css';
import CardsContainer from '../components/tradeComponents/CardsContainer';

const Trade = () => (
  <div className="trade">
    <NavBar />
    <div className="header">
      <div className="container">
        <div className="header-captions">
          <h1> Welcome to our Trading Platform</h1>
          <p> Here you will find our stocks news </p>
        </div>
      </div>

    </div>
    <div className="trade-content">
      <CardsContainer />
    </div>
  </div>
);
export default Trade;
