# Overview
This is a Node.js web application that allows users to access a hidden secret message by inputting the correct password. The application is built using the Express framework to handle routing and middleware functionalities. It features a simple authentication mechanism that checks user-submitted passwords against a predefined value.
<br>
<br>
# Technologies
• `Node.js`: The core server-side JavaScript enviroment used for running the application.
<br>
• `Express`: A web application framework for Node.js, used for routing and middleware support.
<br>
• `Body-parser`: An npm middleware package used to parse incoming request bodies in a middleware before your handlers, available under the req.body property.
<br>
<br>
# Project Structure
1) Public Folder: Contains the static HTML files for the user interface.
    <br>
    •  `index.html`: The homepage with a form for password entry.
    <br>
    • `secrets.html`: The page displaying the secret message post-authentication.
2) Server Setup:
    <br>
    • `index.js`: The main server file where the Express application is configured and routes are defined.
   <br>
    • `Body-parser`: To parse form data sent through HTTP POST.
3) Routes:
    <br>
    • `GET /`: Serves the homepage (`index.html`)
    <br>
    • `POST /check`: Handles the password submission and directs the user either to the secret message or redirects back to the homepage based on the authentication result.


