Input:

The user's input is based on the selection of a genre from the dropdown menu list. This input is captured when the user chooses a genre option.
We have provided body colour as coral, so it displays in that colour fully.

Process:

The selected genre is processed by storing it in the component's state using the useState hook. This allows the component to keep track of the selected genre.
The movie list is filtered based on the selected genre. If the selected genre is "All Genres," all the full movie lists are displayed. When clicked on selected genre such as Action,drama like that then it filters only the selected movie list will be displayed. 
When a user clicks on a particular movie, the handleMovieClick function will be triggered, which in turn displays an alert message like with the movie's title (you clicked this movie).


Output:

The output is the movie list. This list includes the movie titles, genres, and release years. The filtered movie list is displayed based on the selected genre, or the entire movie list is shown if "All Genres" is selected.