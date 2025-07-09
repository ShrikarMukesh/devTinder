const express = require("express"); // Import the Express library
const axios = require("axios");
const cors = require("cors");
require("./config/database");

const app = express(); // Create an Express application : Express is a web framework for Node.js
const port = 3000; // Define the port number for the server. My application will listen on this port for incoming requests


//app.use(cors());

app.use(cors({
  origin: "http://localhost:1234"
}));

// app.get('/api/restaurants', async (req, res) => {
//   console.log("Request received:");
//   try {
//     const swiggyURL = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9396261&lng=77.53542949999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
//
//     const response = await axios.get(swiggyURL, {
//       headers: {
//         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
//       }
//     });
//
//     res.json(response.data);
//   } catch (error) {
//     console.error("Swiggy fetch failed:", error.message);  // <--- print error for debugging
//     res.status(500).json({ error: 'Failed to fetch from Swiggy' });
//   }
// });

app.use((req, res) => {
  res.send("Main page!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // Log a message to the console when the server starts
});
