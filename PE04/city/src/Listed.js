import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CityDetails from './CityDetails'; // Import the CityDetails component

const Listed = ({ cities }) => {
  const [selectedCity, setSelectedCity] = useState(null); // Track the selected city

  const handleCityClick = (city) => {
    setSelectedCity(city); // Set the selected city when clicked
  };

  return (
    <div>
      <h2>Cities List Application</h2>
      <ul>
        {cities.map(city => (
          <li key={city.id}>
            <Link to="#" onClick={() => handleCityClick(city)}>
              {city.name}
            </Link>
          </li>
        ))}
      </ul>

      {selectedCity && <CityDetails city={selectedCity} />} {/* Display details if a city is selected */}
    </div>
  );
};

export default Listed;