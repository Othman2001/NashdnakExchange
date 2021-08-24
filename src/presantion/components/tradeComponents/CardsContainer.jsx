import React, { useState, useEffect } from 'react';
import '../css/cardsContainer.css';
import { useAppState, userActions } from '../../../application/state/stocks';
import Table from './Table';
import API_KEY from '../../config/config';

const CardsContainer = () => {
  const actions = userActions();

  const state = useAppState();
  // eslint-disable-next-line no-unused-vars
  const [result, setResult] = useState([state.stokcs.stockData.results]);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const URL = `https://api.polygon.io/v3/reference/tickers?search=${search}&active=true&sort=ticker&order=asc&limit=10&apiKey=${API_KEY}`;
  const handlePagniation = () => {
    // eslint-disable-next-line max-len,no-unused-expressions
    state.stokcs.stockData.next_url ? actions.stokcs.fetchStocks(`${state.stokcs.stockData.next_url}&apiKey=TWra6NOMRj9WnT5E5llhDs1c9TipjkjZ\n`
        + '\n') : null;
  };
  const fetchData = (url) => {
    actions.stokcs.fetchStocks(url);
    if (state.stokcs.stockData.results) {
      setResult(state.stokcs.stockData.results);
    }
  };
  useEffect(() => {
    fetchData(URL);
  }, [URL, result]);
  return (
    <div className="cards">
      {console.log(result, 'results')}
      <div className="container">
        <div className="search-container">
          <input type="text" value={search} className="search-input " onChange={handleSearch} placeholder="search any thing" />
        </div>
        <div className="row">
          <table className="table">
            <thead>
              <tr>

                <th scope="col">Symbol</th>
                <th scope="col">Name</th>
                <th scope="col">
                  {' '}
                  {' '}
                  {' '}
                </th>
              </tr>
            </thead>
            <tbody>
              {
                // eslint-disable-next-line max-len,react/no-array-index-key
              state.stokcs.stockData.results ? state.stokcs.stockData.results?.map((stock, index) => (<Table key={index} symbol={stock.ticker} title={stock.name} />)) : (<h1>no results found </h1>)

            }
              <tr />
            </tbody>
          </table>
          <button type="button" className="card-button" onClick={handlePagniation}> Load More</button>

        </div>

      </div>
    </div>
  );
};

export default CardsContainer;
