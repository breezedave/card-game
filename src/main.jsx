/* global process */ 
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import App from './App.jsx'

import 'primeicons/primeicons.css';
import './app.css';

if(process.env.VERSION === 'vq') {
  document.body.className = 'vq';
  import("primereact/resources/themes/lara-light-blue/theme.css");
} else {
  import("primereact/resources/themes/lara-light-teal/theme.css");
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
)

