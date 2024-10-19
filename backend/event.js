const mongoose = require('mongoose');

// Event Schema
const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
    required: true,
  },
 
  
  eventDate: {
    type: Date,
    required: true,
  },
  
  achievements: {
    type: String,
  },
  revenue: {
    type: Number,
    default: 0,
  },

  eventType:{
    type:String,
    required:true,
  }
}, {
  collection: 'custom_events' // Specify your desired collection name here
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;

/* const mongoose = require('mongoose');

// Event Schema
const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  revenue: {
    type: Number,
    default: 0
  },
  publications: {
    type: String,
  },
  eventDate: {
    type: Date,
    required: true
  },
  patents: {
    type: String,
  },
  achievements: {
    type: String,
  }
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event; */



/* const mongoose = require('mongoose');

// Event Schema
const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  revenue: {
    type: Number,
    default: 0
  },
  publications: {
    type: String,
  },
  eventDate: {
    type: Date,
    required: true
  },
  patents: {
    type: String,
  },
  achievements: {
    type: String,
  }
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
 */