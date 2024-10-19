const express = require('express');
const Event = require('../models/event'); // Import the Event model
const router = express.Router();

// Controller to create a new event
const createEvent = async (req, res) => {
  const { eventName, description, revenue, publications, eventDate, patents, achievements } = req.body;

  try {
    // Create a new event based on the request body
    const newEvent = new Event({
      eventName,
        eventDescription,
        eventDate,
        achievements,
        revenue,
        eventType,
    });

    // Save the new event in MongoDB
    await newEvent.save();

    res.status(201).json({ 
      message: 'Event added successfully', 
      event: newEvent // Return the created event object
    });
  } catch (error) {
    console.error('Error adding the event:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

// Change the POST route to add a new event
router.post('/add-event', createEvent); // Changed path to /add-event

// Other routes remain unchanged
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find(); // Retrieve all events
    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
router.get('/events/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    console.error('Error fetching the event:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
router.put('/events/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedEvent = await Event.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json({ message: 'Event updated successfully', event: updatedEvent });
  } catch (error) {
    console.error('Error updating the event:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
router.delete('/events/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEvent = await Event.findByIdAndDelete(id);
    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting the event:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

/* const express = require('express');
const { createEvent } = require('../controllers/eventController'); // Import the createEvent controller
const router = express.Router();

// Create a new event (POST request)
router.post('/add-event', createEvent);

// Fetch all events (GET request)
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add other event routes here...
module.exports = router;
 */


/* const express = require('express');
const Event = require('../models/event'); // Import the Event model
const router = express.Router();

// POST route to add a new event
router.post('/add', async (req, res) => {
  const { eventName, description, revenue, publications, eventDate, patents, achievements } = req.body;

  try {
    // Create a new event based on the request body
    const newEvent = new Event({
      eventName,
      description,
      revenue,
      publications,
      eventDate,
      patents,
      achievements,
    });

    // Save the new event in MongoDB
    await newEvent.save();

    res.status(201).json({ message: 'Event added successfully' });
  } catch (error) {
    console.error('Error adding the event:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

module.exports = router; */



/* const express = require('express');
const Event = require('../models/event'); // Import the Event model
const router = express.Router();

// POST route to add a new event
router.post('/add', async (req, res) => {
  const { eventName, description, revenue, publications, eventDate, patents, achievements } = req.body;

  try {
    // Create a new event based on the request body
    const newEvent = new Event({
      eventName,
      description,
      revenue,
      publications,
      eventDate,
      patents,
      achievements,
    });

    // Save the new event in MongoDB
    await newEvent.save();

    res.status(201).json({ message: 'Event added successfully' });
  } catch (error) {
    console.error('Error adding the event:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

module.exports = router;
 */