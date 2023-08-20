import React from 'react';

const CityDetails = ({ city }) => {
  return (
    <div>
      <h2>City Details</h2>
      <p>Name: {city.name}</p>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
    </div>
  );
};

export default CityDetails; 