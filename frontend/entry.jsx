import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  const root = document.getElementById('root');
  ReactDOM.render(<App store={store} />, root);
});
