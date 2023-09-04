import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const RecipeDetails = ({ recipes, onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  const handleDelete = () => {
    onDelete(recipe.id);
    navigate('/recipes'); // Redirect back to the home page after deletion
  };

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h2>Recipe Details</h2>
      <p>Name: {recipe.name}</p>
      <p>Ingredients: {recipe.Ingredients}</p>
      <p>Description: {recipe.Description}</p>
      <Link to={`/recipes/${recipe.id}/edit`}>Edit Recipe</Link>
      <button onClick={handleDelete}>Delete Recipe</button>
    </div>
  );
};

export default RecipeDetails;
