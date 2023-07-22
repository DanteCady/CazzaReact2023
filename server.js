require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect();

// Import individual APIs
const authApi = require('./apis/auth');

// Use the APIs
app.use('/api/auth/signup', authApi);

// Use the auth.js route for login requests
app.use('/api/auth/login', loginRoute); // Use the correct route for the login functionality

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
