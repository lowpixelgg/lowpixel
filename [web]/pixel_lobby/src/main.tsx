import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css';
import { HomePage } from './pages/Home';
import { LangProvider } from './global/LanguageContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LangProvider>
      <HomePage/>
    </LangProvider>
  </React.StrictMode>,
)
