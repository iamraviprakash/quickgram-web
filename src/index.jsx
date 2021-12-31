import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import RootComponent from './RootComponent';
import './index.css';
import { dataClient, DataProvider } from './apiConfig';

ReactDOM.render(
  <DataProvider client={dataClient}>
    <Suspense fallback={'Loading...'}>
      <React.StrictMode>
        <RootComponent />
      </React.StrictMode>
    </Suspense>
  </DataProvider>,
  document.getElementById('root'),
);
