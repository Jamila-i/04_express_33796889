# Express.js Lab Project

This project was created for my Dynamic Web Applications module to help me learn how to build a basic web server using Express.js.

It covers the core features of Express like routing, sending HTML and JSON responses, working with parameters, middleware chaining, and sending real HTML files.

It’s a simple but complete example of how a Node.js server can handle different requests and return different types of content.

# How to run

1. Open the project folder in VS Code or your terminal.
2. Install the dependencies: npm install
3. Start the server: node index.js
4. Open your browser and visit: http://localhost:8000/

# Routes and Links

/ - Home page - http://localhost:8000/
/about - About the server - http://localhost:8000/about
/contact - Contact details (email + GitHub) - http://localhost:8000/contact
/date - Current date and time - http://localhost:8000/date
/info - Returns JSON info about the app - http://localhost:8000/info
/welcome/:name - Dynamic welcome message using a.html - http://localhost:8000/welcome/Jamila
/chain - Demonstrates middleware chaining with next() - http://localhost:8000/chain
/file - Sends the a.html file using res.sendFile() - http://localhost:8000/file
any other route - 404 Page Not Found - http://localhost:8000/random
