import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.css';
import './styles/pages/welcomeOverrides.css';
import './styles/pages/introTypographyMatch.css';
import './styles/pages/navLineFix.css';
import './styles/pages/linksFourFix.css';
import './styles/pages/responsiveFinal.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);