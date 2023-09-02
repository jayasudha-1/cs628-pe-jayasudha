import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';
import RecipeDetails from './RecipeDetails';
import Listed from './Recipe';
import './style.css';
const App = () => {
  const [recipes, setRecipes ] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/recipes" element={<RecipeList recipes={recipes} />} />
        <Route path="/recipes/add" element={<AddRecipe recipes={recipes} setRecipes ={setRecipes } />} />
        <Route path="/recipes/:id" element={<RecipeDetails recipes={recipes} />} />
        <Route path="/" element={<Navigate to="/recipes" />} />
        <Route path="/recipes/RecipeList" element={<Listed recipes={recipes} />} />
      </Routes>
    </Router>
  );
};
export default App;  
