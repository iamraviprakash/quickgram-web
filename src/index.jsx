import React, { Suspense } from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import RootComponent from './pages/RootComponent';
import { BrowserRouter } from 'react-router-dom';

import {
  queryClient,
  QueryClientProvider,
  StyleProvider,
} from '@/configs';

ReactDOM.render(
  <BrowserRouter>
    <StyleProvider>
      <QueryClientProvider value={queryClient}>
        <Suspense fallback={'Loading...'}>
          <React.StrictMode>
            <RootComponent />
          </React.StrictMode>
        </Suspense>
      </QueryClientProvider>
    </StyleProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
