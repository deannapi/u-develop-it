const express = require("express");

// PORT designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();

// Express.js Middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});

// Function to start the Express.js server or PORT 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
