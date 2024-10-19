import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 
import logo from '../images/logo.jpg'; 

const NavigationBar = () => {
  const { currentUser, logout } = useAuth(); 

  return (
    <AppBar position="fixed" sx={{ background: 'linear-gradient(135deg, #8A2BE2, #4B0082)' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '16px' }} />
        
        {}
        <div style={{ marginLeft: 'auto' }}> {}
          {!currentUser ? (
            <>
              <Button component={Link} to="/" color="inherit">
                Login
              </Button>
              <Button component={Link} to="/about" color="inherit">
                About Us
              </Button>
            </>
          ) : (
            <>
              <Button component={Link} to="/dashboard" color="inherit">
                Dashboard
              </Button>
              <Button component={Link} to="/add-event" color="inherit">
                Add Event
              </Button>
              <Button onClick={logout} color="inherit">
                Logout
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
