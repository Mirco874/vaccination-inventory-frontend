import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@mui/material';
import { lightTheme } from './themes';

import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={ lightTheme }>
        <App/>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

