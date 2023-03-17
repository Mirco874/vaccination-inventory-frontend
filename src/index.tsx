import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import { lightTheme } from './themes';

import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

import "./index.css"
import { UIProvider } from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UIProvider>
      <BrowserRouter>
        <ThemeProvider theme={ lightTheme }>
          <App/>
        </ThemeProvider>
      </BrowserRouter>
    </UIProvider>
  </React.StrictMode>
);

