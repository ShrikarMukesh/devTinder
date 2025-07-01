const express = require("express"); // Import the Express library

const app = express(); // Create an Express application : Express is a web framework for Node.js
const port = 3000; // Define the port number for the server. My application will listen on this port for incoming requests

app.use("/hello", (req, res) => {
  res.send("Hello, World!"); // Send a response to the client when a request is received
}); // Use a middleware function to handle incoming requests and send a response

app.use((req, res) => {
  res.send("Main page!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // Log a message to the console when the server starts
});
