Input:
Recipe Data: The main data input for your application is a collection of recipes. This data is initially empty in the App component and is populated as new recipes are added.
Processing:
AddRecipe Component:
Input: User input for a new recipe (name, ingredients, description).
Processing:
It uses the useState hook to manage form input and state.
When the user submits the form, it creates a new recipe object with the provided data, assigns it a unique ID, and adds it to the recipes state.
It uses the useNavigate hook from react-router-dom to navigate to the recipe list page after adding a new recipe.
RecipeList Component:
Input: The list of recipes passed as a prop.
Processing:
It displays a list of recipes, each with a link to its details page.
When a recipe link is clicked, it sets the selectedRecipe state to that recipe, which is then displayed in the RecipeDetails component.
RecipeDetails Component:
Input: The selected recipe passed as a prop.
Processing:
It displays the details of the selected recipe.
It provides options to edit or delete the recipe. When delete is clicked, it calls the onDelete function passed as a prop to remove the recipe from the recipes state.
EditRecipe Component:
Input: The selected recipe to edit and the list of recipes passed as props.
Processing:
It initializes the form with the data of the selected recipe.
When the user submits the form, it updates the recipe data in the recipes state.
It uses the useNavigate hook to navigate back to the recipe list after editing.


Output:
The application outputs a user interface with the following features:
A recipe list page that displays a list of recipes and allows users to click on a recipe to view its details.
A recipe details page that displays the name, ingredients, and description of a selected recipe, with options to edit or delete the recipe.
An add recipe page that allows users to input new recipes.
An edit recipe page that allows users to edit existing recipes.
Users can navigate between these pages using links provided by the react-router-dom library.
The application dynamically updates the recipe list and details based on user interactions and manages the state of recipes using React's useState hook.
When a user deletes a recipe, it updates the list of recipes by removing the deleted recipe from the state.
The application is wrapped in a Router component to enable client-side routing.

