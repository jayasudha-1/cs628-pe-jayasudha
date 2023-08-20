import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CityList from './CityList';
import AddCity from './AddCity';
import CityDetails from './CityDetails';
import Listed from './Listed';
import './styles.css';
const App = () => {
  const [cities, setCities] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/cities" element={<CityList cities={cities} />} />
        <Route path="/cities/add" element={<AddCity cities={cities} setCities={setCities} />} />
        <Route path="/cities/:id" element={<CityDetails cities={cities} />} />
        <Route path="/" element={<Navigate to="/cities" />} />
        <Route path="/cities/CityList" element={<Listed cities={cities} />} />
      </Routes>
    </Router>
  );
};
export default App;  