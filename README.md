# cs628-pe-jayasudha
In the Resume.css file:
The body element is styled as below:
->text-align: center - Aligns the text to center.
->background-color: #bdfb04 - Sets the background color of the body as mentioned in exercise which gives light green color.
->color: black - Sets the text color to black.
->font-size: calc(3px + 2vmin) - Sets the font size.

In the Resume.js file:
->The Resume.css file is imported with the line import './Resume.css';. This provides that the styles defined in Resume.css are applied to the components in the Resume.js file.
->I have mentioned all the content details of the resume which includes title and paragraphs are defined in the file. This provides the content details of resume with name,education details,work experience,address etc..
->The headings are mentioned as <h1>,<h2>,h3> and the inside that heading we can provide paragraph details in <p> tags.

In the App.js file: 
->The Resume.css file is imported with the line import './Resume.css';. This gives the styles mentioned in the Resume.css are applied to the components in the App.js file.
->The Resume component is imported from the Resume.js file using the statement import Resume from './Resume';.
->Inside the App component, there is a <div> element with the className "App". Inside this div, the Resume component is rendered using the <Resume/> syntax. So it is rendered from both the files.
Finally, it is executed and the myresume front end web app is created.
