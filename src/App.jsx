import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailEvents from './Pages/V1/DetailEvents';

import LandingPage2026 from './Pages/V2/Index';
import LandingPage2025 from './Pages/V1/LandingPage';
import FestFacilities from './Pages/V2/FestFacilities';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage2025 />} />
        <Route path="/2026" element={<LandingPage2026 />} />


        <Route path="/fest-facilities" element={<FestFacilities />} />
        <Route path="/event-detail" element={<DetailEvents />} />
      </Routes>
    </Router>
  )
}

export default App
