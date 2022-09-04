import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Home from './components/home/home/Home';
import AdvancedSearch from './components/advancedSearch/AdvancedSearch';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/search"
            element={<AdvancedSearch />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
