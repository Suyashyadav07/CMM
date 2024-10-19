import React from 'react';
import { Typography, Paper, Box, Button } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; 

const Dashboard = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleReportClick = () => {
        navigate('/report'); 
    };

    return (
        <Box className="dashboard-background">
            {}
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>

            <Paper className="dashboard-box" elevation={6}>
                <Typography variant="h4" align="center" marginBottom={2}>
                    Welcome to Your Dashboard
                </Typography>
                {}
                <Button
                    variant="contained" 
                    color="primary" 
                    onClick={handleReportClick} 
                    style={{ marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
                >
                    Report
                </Button>
            </Paper>
        </Box>
    );
};

export default Dashboard;
