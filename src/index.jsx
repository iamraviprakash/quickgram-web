import React, { Suspense } from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import RootComponent from './RootComponent';
import {
  queryClient,
  QueryClientProvider,
  StyleProvider,
  QueryParamProvider,
} from 'Config';

ReactDOM.render(
  <StyleProvider>
    <QueryClientProvider value={queryClient}>
      <QueryParamProvider>
        <Suspense fallback={'Loading...'}>
          <React.StrictMode>
            <RootComponent />
          </React.StrictMode>
        </Suspense>
      </QueryParamProvider>
    </QueryClientProvider>
  </StyleProvider>,
  document.getElementById('root'),
);
