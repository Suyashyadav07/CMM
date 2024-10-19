const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const eventRoutes = require('./routes/eventRoutes'); // Event Routes
const User = require('./models/User'); // User Model

// Load environment variables from .env file
dotenv.config();

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,  // Ensure correct parser for new MongoDB versions
  useUnifiedTopology: true, // Enable the new connection management engine
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process if MongoDB fails to connect
  });

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token valid for 1 hour
    });

    // Respond with token and success message
    res.json({
      message: 'Login successful',
      token,
    });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Use event routes
app.use('/events', eventRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


/* const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const eventRoutes = require('./routes/eventRoutes'); // Event Routes
const User = require('./models/User'); // User Model

// Load environment variables from .env file
dotenv.config();

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // Middleware to parse JSON bodies

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {

})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token valid for 1 hour
    });

    // Respond with token and success message
    res.json({
      message: 'Login successful',
      token,
    });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Use event routes
app.use('/events', eventRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 */


/* const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const eventRoutes = require('./routes/eventRoutes'); // Event Routes
const User = require('./models/User'); // User Model

// Load environment variables from .env file
dotenv.config();

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // Middleware to parse JSON bodies

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {

})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token valid for 1 hour
    });

    // Respond with token and success message
    res.json({
      message: 'Login successful',
      token,
    });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Use event routes
app.use('/events', eventRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 */