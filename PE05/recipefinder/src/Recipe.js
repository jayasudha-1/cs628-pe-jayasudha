import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeDetails from './RecipeDetails'; 

const Recipe = ({ recipes }) => {
  const [selectedRecipe, setselectedRecipe] = useState(null); 

  const handleRecipeClick = (city) => {
    setselectedRecipe(city); // Set the selected city when clicked
  };

  return (
    <div>
      <h2>Recipe Finder Application</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to="#" onClick={() => handleRecipeClick(recipe)}>
          {recipe.Description}
            </Link>
          </li>
        ))}
      </ul>
       {selectedRecipe && <RecipeDetails recipe={selectedRecipe } />} 
    </div>
  );
};

export default Recipe;