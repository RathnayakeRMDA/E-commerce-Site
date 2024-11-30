import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import backgroundImage from '../../images/background1.jpg';

const LandingPage = () => {
  return (
    <Box>
       <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',  
        backgroundPosition: 'center',  
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: '20px', 
      }}
    >
     

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',  
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
          padding: '20px',
          marginTop: "30px"
        }}
      >

        <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Yarn & Charm
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
         Shop Now
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button
              component={Link}
              to="/register"  
              variant="contained"
              color="primary"
              sx={{ padding: '10px 30px' }}
            >
              Sign Up
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to="/login"
              variant="outlined"
              color="primary"
              sx={{ padding: '10px 30px' }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
