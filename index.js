// Bring in the express package so can create a simple web server
const express = require("express");

const app = express(); // Set up the express app
const port = 8000; // 8000 port number for the server to run on

// Import all routes from routes/main.js
const mainRoutes = require("./routes/main");

// Use those routes for every incoming request
app.use("/", mainRoutes);

// Start listening for HTTP requests. This actually turns the app on. When it’s running, you see the message below in the terminal
app.listen(port, () =>
  console.log(`Node server is running on port ${port}...`)
);
