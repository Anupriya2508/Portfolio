// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useRef } from 'react';
import Home from './pages/MainPage';
import CleanIndia from './pages/CleanIndia';
import AmazonClone from './pages/AmazonClone';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects/:Clean India Initiative Website" element={<CleanIndia />} />
          <Route path="/projects/:AmazonClone" element={<AmazonClone />} />
          <Route path="*" component={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
