const bcrypt = require('bcrypt');
const signupModel = require('../models/signupModel');

exports.signup = async (req, res) => {
app.post('/api/signup', async (req, res) => {
  // Extract user info from request
  let user = req.body;

  // TODO: Validate user data

  // Convert DOB to MySQL date format (YYYY-MM-DD)
  if (user.dob) {
    user.dob = new Date(user.dob).toISOString().split('T')[0];
  }

  // Ensure that the password is provided
  if (!user.password) {
    return res.status(400).json({ success: false, message: 'Password is required' });
  }

  // Hash the password
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: 'Failed to hash password' });
  }

  // Check if the email already exists in the database
  const checkEmailQuery = 'SELECT COUNT(*) as count FROM cazza_users WHERE email = ?';
  connection.query(checkEmailQuery, [user.email], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Database error' });
    } else {
      if (result[0].count > 0) {
        return res.status(409).json({ success: false, message: 'Account already exists. Use a different email.' });
      } else {
        // Prepare the query for inserting the new user
        const insertUserQuery =
          'INSERT INTO cazza_users (first_name, last_name, email, password, dob, account_type) VALUES (?, ?, ?, ?, ?, ?)';

        // Execute the query to insert the new user
            connection.query(insertUserQuery, [user.firstName, user.lastName, user.email, user.password, user.dob, user.accountType], (error, result) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: 'Database error' });
        } else {
            console.log(result); // Check the result here
            return res.json({ success: true });
        }
        });
      }
    }
  });
});
};
