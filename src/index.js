import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouterLayer from './router';
import {Provider} from 'react-redux'
import store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterLayer/>
    </Provider>
  </React.StrictMode>
);


