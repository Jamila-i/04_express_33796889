const express = require("express");
const router = express.Router();
const path = require("path");

// Home route – this is what shows up when someone goes to the main URL
router.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to my Express server!</h1>
  `);
});

// About route – just explains what this little server is about
router.get("/about", (req, res) => {
  res.send(`
    <h1>About This Server</h1>
    <p>This server was built using Express.js as part of my Dynamic Web Applications lab.</p>
  `);
});

// Contact route – gives a way to contact me
router.get("/contact", (req, res) => {
  res.send(`
    <h1>Contact</h1>
    <p>Email: jamila.ibrahim605@gmail.com</p>
    <p>GitHub: <a href="https://github.com/jamila-i" target="_blank">jamila-i</a></p>
  `);
});

// Date route – shows current date and time using JS date object
router.get("/date", (req, res) => {
  const now = new Date();
  res.send(`<h1>Current Date & Time</h1><p>${now.toString()}</p>`);
});

// Info route – sends some basic info back as JSON instead of HTML
// This shows that the server can also act like a small API
router.get("/info", (req, res) => {
  const info = {
    app: "Express Lab Server",
    author: "Jamila Ibrahim",
    course: "Dynamic Web Applications",
    year: 2025,
  };
  res.json(info);
});

// Welcome route – takes a name from the URL and says hi
// The ":name" part means this bit of the URL can change. i.e http://localhost:8000/welcome/Jamila . Whatever the user types after /welcome/ will get picked up as 'name'.
router.get("/welcome/:name", (req, res) => {
  // Take the name straight from the URL path
  const name = req.params.name;

  // Send a personalised message using that value
  res.send(`<h1>Welcome, ${name}</h1>`);
});

// Chaining with next(). This route runs two functions in a row using next()
// First function – logs something to the console
function firstStep(req, res, next) {
  console.log("First step ran!"); // show it worked
  next(); // pass control to the next function
}

// Second function – sends the actual response to the browser
function secondStep(req, res) {
  res.send(
    "<h1>Chained route complete!</h1><p>Both functions ran successfully.</p>"
  );
}

// Chain the two functions together so they run in order
router.get("/chain", firstStep, secondStep);

// Sending files. This route sends back a real HTML file instead of writing HTML inside res.send()
router.get("/file", (req, res) => {
  // __dirname means “this folder” and ".." means “go up one level”
  res.sendFile(path.join(__dirname, "..", "a.html"));
});

// Fallback route – this runs if someone visits a page that doesn’t exist e.g. if they try /cat or /random
router.use((req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

// Export router so index.js can use it
module.exports = router;
