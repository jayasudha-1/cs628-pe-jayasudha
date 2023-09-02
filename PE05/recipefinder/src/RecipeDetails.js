import React from 'react';

const RecipeDetails= ({ recipe}) => {
  return (
    <div>
      <h2>Recipe Details</h2>
      <p>Description: {recipe.Description}</p>
      <p>Ingredients: {recipe.Ingredients}</p>
       </div>
  );
};

export default RecipeDetails; 