Input:

User input: In the task description, the user has to give input in "Enter task description" input field. The corresponding tasks will be added below to it when the "Add Task" button is clicked. Then the new task will be added to the ToDo list.
Delete button click: We can click the "Delete" button task to remove it from the ToDo list.

Process:

App component: This is the main component that manages the state of the ToDo list.
taskInput state: The taskInput state stores the current value of the input field, representing the task description the user is typing.
handleInputChange: This function is triggered whenever the user types in the input field. It updates the taskInput state accordingly.
handleAddTask: This function is called when the "Add Task" button is clicked. It adds the current taskInput value to the tasks array and clears the input field.
handleDeleteTask: This function is called when the "Delete" button next to a task is clicked. It removes the task from the list.

Output:

ToDo List Heading: The heading "ToDo List App" is displayed at the top of the page with heading as h1 tags.
Input Field: The "Enter task description" input field allows users to type their task descriptions.
"Add Task" Button: The "Add Task" button allows users to add the task to the ToDo list when clicked.
ToDo List: The list of tasks is displayed as an unordered list.
Tasks: Each task is displayed as a list item (<li>) with the task description followed by a "Delete" button next to it.
"Delete" Button: The "Delete" button allows users to remove a task from the ToDo list when clicked.
Styling: Heading is alligned to the center of the page. And below to it task added with Add button on blue and delete button on red color.