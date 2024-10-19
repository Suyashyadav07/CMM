const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Import User model
const router = express.Router();

// Registration Route
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create new user
        const user = new User({ email, password: hashedPassword });
        
        // Save user to the database
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during registration:', error);
        return res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;




/* const express = require('express');
const router = express.Router();

// Import your user model here if you need it
//const User = require('../models/User');

// Example: Registration route
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  // Implement registration logic here
  res.status(201).send({ message: 'User registered successfully' });
});

// Example: Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // Implement login logic here
  res.status(200).send({ message: 'User logged in successfully' });
});

module.exports = router;
 */