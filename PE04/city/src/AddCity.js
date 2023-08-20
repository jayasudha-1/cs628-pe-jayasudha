import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddCity = ({ cities, setCities }) => {
  const navigate = useNavigate();
  const [cityData, setCityData] = useState({
    name: '',
    country: '',
    population: '',
  });
  const handleSubmit = event => {
    event.preventDefault();
    // Add the new city to the list
    const newCity = { ...cityData, id: cities.length + 1 };
    setCities([...cities, newCity]);
    // Navigate to CitiesList after successful addition
    navigate('/cities');
  };
  const handleChange = event => {
    const { name, value } = event.target;
    setCityData(prevData => ({ ...prevData, [name]: value }));
  };
  return (
    <div>
      <h2>Add City</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={cityData.name} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Country:
          <input type="text" name="country" value={cityData.country} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Population:
          <input
            type="number"
            name="population"
            value={cityData.population}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button type="submit">Add City</button>
      </form>
    </div>
  );
};
export default AddCity;