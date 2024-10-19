import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, Box, Typography, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const AddEventForm = () => {
  const [userType, setUserType] = useState('');
  const [eventDetails, setEventDetails] = useState({
    eventName: '',
    eventDescription: '',
    eventDate: '',
    achievements: '',
    revenue: '',
    eventType: '',
  });
  const [errors, setErrors] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: !value.trim() }));
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    setEventDetails({
      eventName: '',
      eventDescription: '',
      eventDate: '',
      achievements: '',
      revenue: '',
      eventType: '',
    });
    setErrors({});
  };

  const validateFields = () => {
    const newErrors = {};
    const fieldsToValidate = userType === 'faculty'
      ? ['eventName', 'eventDescription', 'eventDate', 'achievements']
      : ['eventType', 'eventDate', 'achievements', 'eventDescription'];

    fieldsToValidate.forEach((field) => {
      if (!eventDetails[field].trim()) {
        newErrors[field] = true;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = () => {
    if (validateFields()) {
      setShowConfirm(true);
    }
  };

  const handleSubmit = () => {
    console.log("Event submitted:", eventDetails);
    setSubmitted(true);
    setShowConfirm(false);

    setTimeout(() => {
      setEventDetails({
        eventName: '',
        eventDescription: '',
        eventDate: '',
        achievements: '',
        revenue: '',
        eventType: '',
      });
      setSubmitted(false);
    }, 2000);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <Box
      className="add-event-box"
      sx={{
        position: 'relative',
        maxHeight: '80vh',
        overflowY: 'auto',
        margin: '20px auto',
        width: '50%',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        boxSizing: 'border-box',
        background: 'url(/path/to/your-bubble-background.jpg) no-repeat center center/cover',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Add Event
      </Typography>

      <Select value={userType} onChange={handleUserTypeChange} fullWidth>
        <MenuItem value="" disabled>Select User Type</MenuItem>
        <MenuItem value="faculty">Faculty</MenuItem>
        <MenuItem value="student">Student</MenuItem>
      </Select>

      {userType && (
        <Box
          mt={2}
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxHeight: 'calc(100vh - 200px)',
            overflowY: 'auto',
          }}
        >
          {userType === 'faculty' && (
            <>
              <TextField
                name="eventName"
                label="Event Name"
                value={eventDetails.eventName}
                onChange={handleChange}
                fullWidth
                required
                error={!!errors.eventName}
                helperText={errors.eventName ? 'Event Name is required' : ''}
              />
              <TextField
                name="eventDescription"
                label="Event Description"
                value={eventDetails.eventDescription}
                onChange={handleChange}
                fullWidth
                required
                multiline
                rows={3}
                error={!!errors.eventDescription}
                helperText={errors.eventDescription ? 'Event Description is required' : ''}
              />
              <TextField
                name="eventDate"
                label="Event Date"
                type="date"
                value={eventDetails.eventDate}
                onChange={handleChange}
                fullWidth
                required
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!errors.eventDate}
                helperText={errors.eventDate ? 'Event Date is required' : ''}
              />
              <TextField
                name="achievements"
                label="Achievements/ Publications/ Patents Filed"
                value={eventDetails.achievements}
                onChange={handleChange}
                fullWidth
                required
                multiline
                rows={3}
                error={!!errors.achievements}
                helperText={errors.achievements ? 'Achievements are required' : ''}
              />
              <TextField
                name="revenue"
                label="Revenue Generated"
                value={eventDetails.revenue}
                onChange={handleChange}
                fullWidth
              />
            </>
          )}

          {userType === 'student' && (
            <>
              <TextField
                name="eventType"
                label="Event Type"
                select
                value={eventDetails.eventType}
                onChange={handleChange}
                fullWidth
                required
                error={!!errors.eventType}
                helperText={errors.eventType ? 'Event Type is required' : ''}
              >
                <MenuItem value="exam">Exam</MenuItem>
              </TextField>
              <TextField
                name="eventDate"
                label="Event Date"
                type="date"
                value={eventDetails.eventDate}
                onChange={handleChange}
                fullWidth
                required
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!errors.eventDate}
                helperText={errors.eventDate ? 'Event Date is required' : ''}
              />
              <TextField
                name="achievements"
                label="Achievements"
                value={eventDetails.achievements}
                onChange={handleChange}
                fullWidth
                required
                multiline
                rows={3}
                error={!!errors.achievements}
                helperText={errors.achievements ? 'Achievements are required' : ''}
              />
              <TextField
                name="eventDescription"
                label="Description"
                value={eventDetails.eventDescription}
                onChange={handleChange}
                fullWidth
                required
                multiline
                rows={3}
                error={!!errors.eventDescription}
                helperText={errors.eventDescription ? 'Description is required' : ''}
              />
            </>
          )}
          <Button variant="contained" color="primary" onClick={handleConfirm} fullWidth>
            Confirm
          </Button>
        </Box>
      )}

      {showConfirm && (
        <Box mt={3} textAlign="center">
          <Typography variant="h6">Confirm Event Details</Typography>
          <Typography variant="body1">Event Name: {eventDetails.eventName}</Typography>
          {userType === 'faculty' && (
            <>
              <Typography variant="body1">Event Description: {eventDetails.eventDescription}</Typography>
              <Typography variant="body1">Event Date: {eventDetails.eventDate}</Typography>
              <Typography variant="body1">Achievements: {eventDetails.achievements}</Typography>
              <Typography variant="body1">Revenue: {eventDetails.revenue}</Typography>
            </>
          )}
          {userType === 'student' && (
            <>
              <Typography variant="body1">Event Type: {eventDetails.eventType}</Typography>
              <Typography variant="body1">Event Date: {eventDetails.eventDate}</Typography>
              <Typography variant="body1">Achievements: {eventDetails.achievements}</Typography>
              <Typography variant="body1">Description: {eventDetails.eventDescription}</Typography>
            </>
          )}
          <Button variant="contained" color="success" onClick={handleSubmit} fullWidth>
            Submit
          </Button>
        </Box>
      )}

      <Snackbar open={submitted} autoHideDuration={6000} onClose={() => setSubmitted(false)}>
        <Alert onClose={() => setSubmitted(false)} severity="success" sx={{ width: '100%' }}>
          Event added successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AddEventForm;
