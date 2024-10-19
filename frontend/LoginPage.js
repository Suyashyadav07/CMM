import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; 

const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/dashboard');
        } catch (error) {
            console.error('Failed to log in:', error);
        }
    };

    return (
        <Box className="login-background">
            {}
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>

            <Paper className="login-box" elevation={6}>
                <Typography variant="h4" align="center" marginBottom={2}>Login</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Login
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default Login;
