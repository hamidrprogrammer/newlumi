import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './core/i18n/i18n';
import {  ThemeProvider } from 'styled-components';
import { theme } from './core/theme/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
 <ThemeProvider theme={theme} >
    <QueryClientProvider client={queryClient}>
        <App />
        </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
