const express = require('express');
const router = express.Router();

// Example: Get user details
router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  // Implement logic to get user details
  res.status(200).send({ message: 'User details fetched successfully' });
});

// Add more user-related routes as needed

module.exports = router;


/* const express = require('express');
const router = express.Router();

// Example: Get user details
router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  // Implement logic to get user details
  res.status(200).send({ message: 'User details fetched successfully' });
});

// Add more user-related routes as needed

module.exports = router;
 */