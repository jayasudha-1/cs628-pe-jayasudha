
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

const RecipeList = ({ recipes }) => {
  const [selectedRecipe, setselectedRecipe] = useState(null); 

  const handleRecipeClick = (recipe) => {
    setselectedRecipe(recipe); 
  };

  return (
    <div>
      <h1>Recipe Finder Application</h1>
      <Link to="/recipes/RecipeList ">Recipes List</Link>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to="#" onClick={() => handleRecipeClick(recipe)}>
              {recipe.Description}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/recipes/add">Add Recipe</Link>
      {selectedRecipe && <RecipeDetails recipe={selectedRecipe } />} 
    </div>
  );
};

export default RecipeList; 
