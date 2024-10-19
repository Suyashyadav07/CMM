import React from 'react';
import { Box } from '@mui/material';

const Report = () => {
  return (
    <Box
      sx={{
        height: 'calc(100vh - 64px)', 
        overflow: 'hidden',
      }}
    >
      <iframe
        title="Report"
        src="https://www.google.com" 
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
      />
    </Box>
  );
};

export default Report;
