const express = require("express");
const db = require('./db/database');

// PORT designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();

// Bring in the routes
const apiRoutes = require('./routes/apiRoutes');


// Express.js Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use the routes
app.use('/api', apiRoutes);

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
  res.status(404).end();
});

// Function to start the Express.js server or PORT 3001
// Start server after DB connection
db.on("open", () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
