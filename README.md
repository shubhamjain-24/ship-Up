# Getting Started
This repository aims to assist you in beginning work on a MERN stack application with a solid file structure as a foundation. To get started make a copy of this template repo for your project teams.


Getting Started
**This project includes both the client application and the server application, and the node_modules directory will be present in two different places. To set up the project, follow these steps:**

**Run npm install from the root directory.**
After this initial installation, run npm run-script install-all from the root directory. You can use this command anytime you need to install all modules again. This command is defined as a script in the package.json file.

# Installing Dependencies

**npm install**       
#Install root-level dependencies

# Deployment
I have deployed the app on vercel



"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "deploy": "vercel"
}
# Scripts
**start:** Start the client application.
**build:** Build the client application for production.
**test:** Run tests.
**eject:** Eject from Create React App

"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "install-all": "npm install && cd client && npm install && cd .."
}

# File Structure
 ShipUp contains all the file
# ShipUp

The Loan App project is organized into the following directories to maintain a clean and modular structure:

## Frontend (ShipUp)

- **public:** Holds all static files for the application.

- **src:**
  - **components:** Contains different components that make up the views of our application.
  - **Images:** Holds all the images used in the application.
  - **Pages:** This folder contains all the pages used in the web app.
  - **App.js:** Renders all browser routes and different views.
  - **index.js:** Renders the React app by rendering App.js (should not be changed).
  - **package.json:** Defines npm behaviors and packages for the client.
  - **.gitignore:** Tells Git which files to ignore.
  - **README:** This file!



