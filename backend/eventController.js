const express = require('express');
const User = require('../models/User');
const Event = require('../models/event'); // Import the Event model
const router = express.Router();

const createEvent = async (req, res) => {
    const { eventName, description, revenue, publications, eventDate, patents, achievements } = req.body;
  
    // Log the request body for debugging
    console.log('Request body:', req.body);
  
    // Validate that the required fields are present
    if (!eventName || !description || !eventDate) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
  
    try {
      // Create a new event object
      const newEvent = new Event({
        eventName,
        eventDescription,
        eventDate,
        achievements,
        revenue,
        eventType,
      });
  
      // Save the event to MongoDB
      await newEvent.save();
  
      // Send a success response with the newly created event
      res.status(201).json({
        message: 'Event added successfully',
        event: newEvent,
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