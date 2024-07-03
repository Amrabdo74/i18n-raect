import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n'; // import the i18n configuration
import BackToTopButton from './Top.jsx';
import WhatsAppMessage from './Whats.jsx';
import WaveAnimation from './Wave.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <BackToTopButton/>
    <WhatsAppMessage/>
    <WaveAnimation/>
  </React.StrictMode>,
)
