import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App/App.jsx"
import PresentationPage from "./Presentation/PresentationPage.jsx";
import ShuffleCards from "./ShuffleCards/ShuffleCards.jsx";
import READMEPage from "./ReadMe/READMEPage.jsx";
import Landing from "./Landing/Landing.jsx";
import PrivacyPolicyPage from "./Legal/Privacy/PrivacyPage.jsx";
import TOSPage from "./Legal/Tos/TermsOfService.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename='/PhonicsPlayground/'>
          <Routes>
              <Route path="/" element={<Landing />} />

              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/tos" element={<TOSPage />} />

              <Route path="/word-app" element={<App />} />
              <Route path="/word-app/presentation" element={<PresentationPage />} />
              <Route path="/word-app/presentation/shuffling" element={<ShuffleCards />} />
              <Route path="/readme" element={<READMEPage /> } />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
