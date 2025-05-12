import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App/App.jsx"
import PresentationPage from "./Presentation/PresentationPage.jsx";
import ShuffleCards from "./ShuffleCards/ShuffleCards.jsx";
import READMEPage from "./ReadMe/READMEPage.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename='/PhonicsPlayground/'>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/presentation" element={<PresentationPage />} />
              <Route path="/presentation/shuffling" element={<ShuffleCards />} />
              <Route path="/readme" element={<READMEPage /> } />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
