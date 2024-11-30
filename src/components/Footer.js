import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1976d2',
        color: 'white',
        padding: '20px 0',
        textAlign: 'center',
        mt: 'auto',
      }}
    >
      <Typography variant="body2">© 2024 Yarn & Charm. All rights reserved.</Typography>
      <Box sx={{ mt: 2 }}>
        <Link href="/privacy-policy" color="inherit" sx={{ marginRight: 3 }}>
          Privacy Policy
        </Link>
        <Link href="/terms-of-service" color="inherit" sx={{ marginRight: 3 }}>
          Terms of Service
        </Link>
        <Link href="/contact-us" color="inherit">
          Contact Us
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
