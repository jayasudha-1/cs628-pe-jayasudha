import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CityDetails from './CityDetails'; // Import the CityDetails component

const CityList = ({ cities }) => {
  const [selectedCity, setSelectedCity] = useState(null); // Track the selected city

  const handleCityClick = (city) => {
    setSelectedCity(city); // Set the selected city when clicked
  };

  return (
    <div>
      <h1>Cities Application</h1>
      <Link to="/cities/CityList">Cities List</Link>
      <ul>
        {cities.map(city => (
          <li key={city.id}>
            <Link to="#" onClick={() => handleCityClick(city)}>
              {city.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/cities/add">Add City</Link>

      {selectedCity && <CityDetails city={selectedCity} />} {/* Display details if a city is selected */}
    </div>
  );
};

export default CityList; 