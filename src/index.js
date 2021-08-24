import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'overmind-react';
import { createOvermind } from 'overmind';
import App from './App';
import config from './application/state/index';

const overmind = createOvermind(config, {
  devtools: 'localhost:3031',
});

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider value={overmind}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
