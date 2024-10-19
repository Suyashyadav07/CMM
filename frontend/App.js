import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AuthProvider, useAuth } from './context/AuthContext'; 
import Login from './pages/LoginPage'; 
import Dashboard from './pages/Dashboard';
import AddEventForm from './components/AddEventForm';
import NavigationBar from './pages/NavigationBar'; 
import Report from './pages/Report'; 

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <AuthProvider>
        <Router>
          <NavigationBar /> {}
          <div style={{ paddingTop: '64px', height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
            <Routes>
              <Route path="/" element={<LoginRoute />} />
              <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path="/add-event" element={<PrivateRoute><AddEventForm /></PrivateRoute>} />
              <Route path="/report" element={<PrivateRoute><Report /></PrivateRoute>} /> {}
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </LocalizationProvider>
  );
};

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth(); 
  return currentUser ? children : <Navigate to="/" />; 
};

const LoginRoute = () => {
  const { currentUser } = useAuth(); 
  return currentUser ? <Navigate to="/dashboard" /> : <Login />; 
};

export default App;
