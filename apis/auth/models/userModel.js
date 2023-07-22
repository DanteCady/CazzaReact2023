// apis/auth/models/userModel.js

// Implement the User model if you haven't already
// This model represents the user schema in the database and should contain the user's role field and other relevant information
// For simplicity, we'll assume a basic User model with an email, password, and role field
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true }, // This field represents the user's role (e.g., 'landlord' or 'tenant')
  // Add other fields as needed for your application
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
