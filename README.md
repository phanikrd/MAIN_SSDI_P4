# MAIN_SSDI_P4

Project 4: Page Generation with ReactJS Documentation
Table of Contents
Introduction
1.1 Overview
1.2 Project Scope
1.3 Target Audience

Agile Methodology
2.1 Epic: Page Generation with ReactJS
2.2 User Stories
2.3 Tasks

Problem Descriptions
3.1 Problem 1: Understand and Update the Example View
3.2 Problem 2: Create a New Component - States View
3.3 Problem 3: Personalizing the Layout
3.4 Problem 4: Add Dynamic Switching of the Views
3.5 Problem 5: Single Page App

Deliverables
4.1 Submission

Setup and Usage
5.1 Setup
5.2 Usage
5.2.1 Building the Project
5.2.2 Running the Web Server
5.2.3 Stopping the Web Server
5.3 Development Environment Setup

Technologies Used
6.1 ReactJS
6.2 Node.js
6.3 npm (Node Package Manager)
6.4 Webpack
6.5 Babel
6.6 ESLint
6.7 Express.js
6.8 React Router

Testing and Expected Outputs
7.1 Running Tests
7.2 Expected Outputs
7.3 TroubleShooting

Credits Acknowledgments


1. Introduction
1.1 Overview
Project 4, "Page Generation with ReactJS," is designed to provide practical experience with ReactJS and web application development. It involves building and enhancing web pages using ReactJS components and managing the project using Agile methodology.

1.2 Project Scope
The scope of this project includes the following main components:

Understanding and updating an example view.
Creating a new ReactJS component for displaying state names based on user input.
Personalizing the layout with a customized header component.
Adding dynamic switching between views.
Implementing a single-page application (SPA) using React Router.
1.3 Target Audience
The project is intended for students or individuals interested in learning ReactJS, web application development, and project management using Agile methodology.

2. Agile Methodology
2.1 Epic: Page Generation with ReactJS
The project follows an Agile methodology, specifically using the Epic approach. The Epic is titled "Page Generation with ReactJS" and encompasses the entire project's goals and objectives.

2.2 User Stories
The project is broken down into user stories, each addressing a specific aspect of the Epic. User stories are as follows:

User Story 1: Understand and Update the Example View
Tasks:
Review and analyze the getting-started.html file.
Review and analyze the gettingStarted.jsx file.
Review and analyze the components/example/Example.jsx file.
User Story 2: Update Model Data in the Example Component
Tasks:
Locate and replace "Unknown name" with my name in the model data.
User Story 3: Update the div Region in the Example Component
Tasks:
Replace the contents of the div region with JSX statements displaying my name and motto.
User Story 4: Allow User to Update the Motto in the Example Component
Tasks:
Implement the ability for the user to update the motto.
Include styling for the updated display in Example.css.
User Story 1: Create a New Component - States View
Tasks:
Create a States.jsx file.
Implement the States component.
User Story 2: Implement an Input Field in the States Component
Tasks:
Create the input field.
Implement functionality to filter state names based on the entered substring.
User Story 3: Display a List of Matching States in the States Component
Tasks:
Implement the list display.
Ensure alphabetical sorting.
User Story 4: Display the Substring Used for Filtering
Tasks:
Display the substring used for filtering.
User Story 5: Handle Cases with No Matching States
Tasks:
Implement a message for no matching states.
Include styling for the state list in States.css.
User Story 1: Create a ReactJS Component Named Header
Tasks:
Create a Header.jsx file.
Implement the Header component.
User Story 2: Add the Header Component to All ReactJS Web Apps
Tasks:
Integrate the Header component into gettingStarted.jsx, p2.jsx, p4.jsx, p5.jsx.
User Story 3: Design a Creative and Personalized Header
Tasks:
Design the personalized header.
Include styling for the header in Header.css.
User Story 1: Create p4.html and p4.jsx Files
Tasks:
Create p4.html.
Create p4.jsx.
User Story 2: Implement Ability to Switch Between Views
Tasks:
Implement the switching mechanism.
Add buttons for switching between views.
User Story 3: Modify Webpack Configuration for compiled/p4.bundle.js
Tasks:
Modify webpack.config.js to build p4.bundle.js.
User Story 1: Create p5.html and p5.jsx Files
Tasks:
Create p5.html.
Create p5.jsx.
User Story 2: Convert Code to Use React Router for SPA
Tasks:
Import React Router components.
Implement routing for the views.
Create a styled toolbar-like control for switching between views.
2.3 Tasks
Tasks for each user story and problem are outlined in the respective sections of this documentation. The tasks include specific actions and implementations required to achieve the project's objectives.

3. Problem Descriptions
This section provides detailed descriptions of each problem addressed in the project.

3.1 Problem 1: Understand and Update the Example View
This problem involves understanding the existing example view and making updates to it. It includes updating model data, displaying a personalized message, and allowing the user to update a motto.

3.2 Problem 2: Create a New Component - States View
In this problem, a new ReactJS component called States is created to display state names containing a given substring. It includes implementing an input field, listing matching states, and handling cases with no matching states.

3.3 Problem 3: Personalizing the Layout
This problem focuses on creating a personalized header component named Header and adding it to all ReactJS web apps in the assignment. It involves designing a creative and personalized header.

3.4 Problem 4: Add Dynamic Switching of the Views
In this problem, p4.html and p4.jsx files are created to include both view components. The ability to switch between views is implemented, along with buttons for switching.

3.5 Problem 5: Single Page App
The final problem involves converting the code to use React Router for creating a single-page application (SPA). It includes importing React Router components, implementing routing, and creating a styled toolbar-like control for switching between views.

4. Deliverables
4.1 Submission
After implementing the project, the following updated files should be included in the repository:

components (with updated components)
modelData/example.js (updated model data)
styles (updated styles)
getting-started.html (updated)
gettingStarted.jsx (updated)
p2.html (updated)
p2.jsx (updated)
p4.html (updated)
p4.jsx (updated)
p5.html (updated)
p5.jsx (updated)
webpack.config.js (updated)
These deliverables should be submitted using the standard submission mechanism outlined in the project guidelines.

5. Setup and Usage
This section provides step-by-step instructions on how to set up the project and how to use it for development and testing.

5.1 Setup
Follow these steps to set up the project on your local development environment:

Prerequisites:

Ensure you have Node.js and npm (Node Package Manager) installed on your system. If not, follow the installation instructions in Project 0 to install them.
Clone the Repository:
Create a directory project4 on your local machine.
Clone the contents of the project repository into the project4 directory.
git clone <repository_url> project4

Install Dependencies:
Navigate to the project4 directory in your terminal.
Run the following command to install the project's dependencies.
npm install
This will fetch around 600 node modules needed for the project.

5.2 Usage
Once you have set up the project, you can use the provided npm scripts to build and run the ReactJS web application. Here are the usage instructions:

5.2.1 Building the Project
To build the project and bundle the ReactJS files, use the following npm scripts:
npm run build

Runs Webpack using the configuration file webpack.config.js to package all of the project's JSX files into a single JavaScript bundle in the compiled directory.
npm run build:w

Similar to npm run build, but it also invokes Webpack with the --watch option, allowing automatic regeneration of the bundle if any components change. Useful for development.
npm run lint:

Runs ESLint on all the project's JavaScript files to check for code quality and style. Ensure your code runs ESLint without warnings.

5.2.2 Running the Web Server
To serve the web application to your browser, you'll need to start the Node.js web server. Use the following command:
node webServer.js
The web server will serve the application at http://localhost:3000. You can access the web app through this URL.

5.2.3 Stopping the Web Server
If needed, you can stop the background web server using the following command:
taskkill /IM node.exe /F

5.3 Development Environment Setup
For a more efficient development workflow, consider configuring your development environment to run Webpack in watch mode and start the web server simultaneously. Here are some commands you can use based on your operating system:

Unix-like Shell (e.g., MacOS):
node webServer.js & npm run build:w
This runs the web server in the background and starts Webpack in watch mode.

Windows:
node webServer.js
npm run build:w
This starts the web server in the background and runs Webpack in the foreground.

These commands will streamline your development process, automatically updating the bundle as you make changes to components.

6. Technologies Used
This section provides descriptions of the key technologies and tools used in the project. Understanding these technologies is essential for working with the project effectively.

6.1 ReactJS
ReactJS is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the dynamic updating of the user interface efficiently. ReactJS is known for its virtual DOM (Document Object Model) and component-based architecture, making it a powerful choice for building interactive web applications.

6.2 Node.js
Node.js is an open-source JavaScript runtime that allows developers to execute JavaScript code outside of a web browser. It provides a server-side runtime environment, making it suitable for building server applications, including web servers. Node.js has a vast ecosystem of packages available through npm (Node Package Manager), which simplifies dependency management.

6.3 npm (Node Package Manager)
npm is the default package manager for Node.js. It allows developers to install, manage, and share JavaScript packages and libraries easily. In this project, npm is used to fetch and manage various Node modules, including build tools like Webpack, Babel, and ESLint.

6.4 Webpack
Webpack is a powerful and widely used JavaScript module bundler. It is essential for bundling and packaging various assets and modules in a web application, including JavaScript, CSS, and images. In this project, Webpack is used to bundle ReactJS components into a single JavaScript bundle for efficient delivery to the browser.

6.5 Babel
Babel is a JavaScript compiler that allows developers to write modern JavaScript code (ES6 and beyond) and transpile it into code compatible with older browsers. It is commonly used in ReactJS projects to ensure cross-browser compatibility. Babel is configured to compile JSX (JavaScript XML) syntax used in React components.

6.6 ESLint
ESLint is a static code analysis tool for identifying and fixing problems in JavaScript code. It helps maintain code quality, consistency, and adherence to coding standards. In this project, ESLint is used to check the JavaScript code for errors and enforce coding conventions.

6.7 Express.js
Express.js is a minimal and flexible Node.js web application framework that simplifies building web servers and APIs. In this project, Express.js is used to serve the ReactJS web application to the browser. It handles routing and serving static files.

6.8 React Router
React Router is a popular library for routing in React applications. It allows developers to create single-page applications (SPAs) with multiple views and handle navigation between them. In the final problem (Problem 5), React Router is used to implement SPA functionality, enabling users to switch between different views seamlessly.

Understanding these technologies is crucial for working with the project, as they form the foundation of modern web application development with ReactJS.

7. Testing and Expected Outputs
Testing is a crucial part of the development process to ensure that your ReactJS web application functions as expected. This section provides guidelines on how to test the project components and the expected outputs when the project is working correctly.

7.1 Running Tests
To test the project components, follow these steps:

Build the Project:
Before running tests, ensure that you have built the project using the appropriate npm scripts (npm run build or npm run build:w).
Start the Web Server:

Start the Node.js web server by running:
node webServer.js
This will make the application accessible at http://localhost:3000.

Access the Web App:
Open your web browser and navigate to http://localhost:3000 to access the application.
Test Each Component:
Interact with each component to ensure they function as expected.
Follow the specific testing instructions provided for each problem in the project.

7.2 Expected Outputs
Problem 1: Understand and Update the Example View
After making the updates to the Example component, the web page should display your name and a short motto in the specified div region.
You should be able to update the displayed motto interactively.



Problem 2: Create a New Component - States View
The States component should include an input field for entering a substring.
As you type in the input field, the component should display a list of state names that contain the entered substring (case-insensitive).
The displayed list should be in alphabetical order.
If there are no matching states, a message indicating this should be displayed.



Problem 3: Personalizing the Layout
The Header component should be displayed at the top of all web app views.
The header should be personalized and include your creative design.
It should add a unique touch to the layout.



Problem 4: Add Dynamic Switching of the Views
The p4.html file should include both the Example and States components.
Buttons should be present above each component, allowing you to switch between them.
Clicking the buttons should toggle the display of the components.



Problem 5: Single Page App
In p5.html, the React Router should be used to create a single-page application (SPA) with routing.
There should be a toolbar-like control for switching between views.
Clicking the control or navigating to specific URLs should display the corresponding components.



7.3 Troubleshooting
If you encounter issues or unexpected behavior while testing, consider the following troubleshooting steps:

Check your code for syntax errors and follow the ESLint guidelines to ensure code quality.
Verify that all required dependencies are installed correctly using npm install.
Review the component implementations and compare them to the provided problem descriptions.
Check the browser console for error messages that may provide insights into the issue.
Testing and verifying the expected outputs will help you ensure that your project is functioning correctly and ready for submission.

8. Credits Acknowledgments

Neha Galla
Moulya Madamanchi
Sai Sushma Gurram
Phani Kiran Reddy Duggempudi
Saketh Reddy Vallamreddy
Phiny Francis Govathoti 

Resources Used:
Webstorm
Chrome
Github VCS
Node js
React
