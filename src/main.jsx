import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import App from './App.jsx'
import "primereact/resources/themes/lara-light-teal/theme.css";
import 'primeicons/primeicons.css';
import './app.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
)
