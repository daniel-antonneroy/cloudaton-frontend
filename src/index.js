import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { ThemeProvider } from '@mui/material';
import DefaultTheme from './app/shared/assets/themes/DefaultTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
