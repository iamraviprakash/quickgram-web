import React, { Suspense } from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import RootComponent from './RootComponent';
import { queryClient, QueryClientProvider } from './config';

ReactDOM.render(
  <QueryClientProvider value={queryClient}>
    <Suspense fallback={'Loading...'}>
      <React.StrictMode>
        <RootComponent />
      </React.StrictMode>
    </Suspense>
  </QueryClientProvider>,
  document.getElementById('root'),
);
