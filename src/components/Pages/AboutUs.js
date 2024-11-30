import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button, AppBar, Toolbar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Logo from '../../images/logo.jpg';
import smith from '../../images/smith.jpg';
import emily from '../../images/emily.jpg';
import jon from '../../images/jon.jpg';
import Footer from '../Footer';
import Header from '../Header';

const AboutUsPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
     <Header/>
      <Container maxWidth="lg" sx={{ paddingTop: 5, paddingBottom: 5 }}>
        <Typography variant="h3" align="center" sx={{ marginBottom: 4 }}>
          About Us
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3, boxShadow: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
                Who We Are
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Yarn & Charm is a boutique fashion brand that specializes in handmade
                woolen bags and dresses. Our team is passionate about creating sustainable
                fashion with an emphasis on quality craftsmanship and timeless design.
                We are committed to providing our customers with beautiful, one-of-a-kind
                pieces that not only enhance their wardrobes but also tell a story.
              </Typography>
            </Paper>
          </Grid>

          {/* Section 2: Our Mission */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3, boxShadow: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Our mission is to empower individuals through high-quality, ethically crafted
                fashion. We focus on sustainable production processes and aim to make a positive
                impact on both the fashion industry and the environment. By supporting local artisans
                and using eco-friendly materials, we strive to offer clothing that is both stylish and
                responsible.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ marginTop: 5, marginBottom: 3 }}>
          <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Meet Our Team
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ padding: 3, textAlign: 'center' }}>
                <img
                  src={jon} 
                  alt="Team Member"
                  style={{ width: '100%', borderRadius: '50%' }}
                />
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  Jon Doe
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Founder & CEO
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ padding: 3, textAlign: 'center' }}>
                <img
                  src={smith}
                  alt="Team Member"
                  style={{ width: '95%', borderRadius: '50%' }}
                />
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  John Smith
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Head of Design
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ padding: 3, textAlign: 'center' }}>
                <img
                  src={emily} 
                  alt="Team Member"
                  style={{ width: '45%', borderRadius: '50%' }}
                />
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  Emily Johnson
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Marketing Director
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
          <Button
            component={Link}
            to="/products"
            variant="contained"
            color="primary"
            sx={{ padding: '10px 20px', fontSize: '16px' }}
          >
            Explore Our Collection
          </Button>
        </Box>
      </Container>
      <Footer/>
    </Box>
  );
};

export default AboutUsPage;
