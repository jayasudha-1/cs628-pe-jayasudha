# cs628-pe-jayasudha
Input:
The content displayed in the app is considered as input. In this case, the input consists of the  resume details like the name, education details "Jayasudha" and the address/contact information "611 Highland Drive, APT#103 Seattle, Washington-98109 | 2065366069|" and so on.


Process:
The web app consists of three main components: Resume.css, Resume.js, and App.js.
The Resume.css file contains styles that define the appearance and styles of the app, such as the background color, text alignment to center, and font size.
The Resume.js file imports the Resume.css file and defines the Resume component. 
The App.js file imports both the Resume.css and Resume.js files. It defines the App component, which provides it as the main component for the web app.
Inside the App component, the Resume component is rendered within a <div> element with the className "App".
When the web app is executed, the App component is rendered, which in turn renders the Resume component.


Output:
The output of the web app is a user interface (UI) that displays the name "Jayasudha" as a level 1 heading as mentioned h1 and the address/contact information as a paragraph.
The UI is styled according to the styles defined in the Resume.css file, including the text alignment, background color, and font size.
The output is presented in a web browser.

Overall, this web app takes the provided information as input, processes it and outputs to the user in the web browser.
