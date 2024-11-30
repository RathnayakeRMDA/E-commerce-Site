import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import Footer from '../Footer';
import Header from '../Header';

const TermsOfService = () => {
  return (
    <Box sx={{ padding: 3, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <Header/>
      <Container maxWidth="md">
        <Paper sx={{ padding: 4, backgroundColor: 'white', boxShadow: 3 }}>
          <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', marginBottom: 3 }}>
            Terms of Service
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Last Updated: 29/11/2024
          </Typography>

          <Typography variant="body1" paragraph>
            Welcome to Yarn & Charm! These Terms of Service (“Terms”) govern your use of our website and services. By accessing or using our website, you agree to comply with these Terms. If you do not agree with these Terms, please do not use our website.
          </Typography>

          <Typography variant="body1" paragraph>
            <strong>1. Acceptance of Terms</strong><br />
            By accessing or using Yarn & Charm, you agree to abide by these Terms and all applicable laws and regulations. If you do not agree to these Terms, please refrain from using the website.
          </Typography>

          <Typography variant="body1" paragraph>
            <strong>2. Modification of Terms</strong><br />
            We reserve the right to update or modify these Terms at any time without prior notice. Any changes to these Terms will be effective immediately upon posting on this page. Your continued use of the website following the posting of changes constitutes your acceptance of those changes.
          </Typography>

          <Typography variant="body1" paragraph>
            <strong>3. Use of the Website</strong><br />
            You agree to use the website for lawful purposes only and to comply with all applicable laws and regulations. You may not use the website to engage in any activities that could harm, disrupt, or interfere with the operation of the website or the experience of other users.
          </Typography>

          <Typography variant="body1" paragraph>
            <strong>4. Account Creation and Security</strong><br />
            To access certain features of our website, you may be required to create an account. You are responsible for providing accurate and up-to-date information during account creation and for maintaining the confidentiality of your login credentials. You agree to notify us immediately if you suspect any unauthorized use of your account.
          </Typography>

          <Typography variant="body1" paragraph>
            <strong>5. User Content</strong><br />
            You may have the opportunity to submit content to the website, including but not limited to reviews, comments, or other materials. By submitting content, you grant [Your Website Name] a non-exclusive, royalty-free, worldwide license to use, reproduce, and distribute the content for promotional and commercial purposes.
          </Typography>

          <Typography variant="body1" paragraph>
            <strong>6. Privacy Policy</strong><br />
            Your use of our website is also governed by our Privacy Policy, which can be found. By using the website, you consent to the practices described in the Privacy Policy.
          </Typography>

          {/* Add more sections as necessary */}

          <Typography variant="body1" paragraph>
            <strong>13. Contact Information</strong><br />
            If you have any questions or concerns about these Terms of Service, please contact us at: <br />
            Yarn & Charm <br />
            Email: contact@yarnandcharm.com <br />
            Phone: 011-2 227 894<br />
          </Typography>
        </Paper>
      </Container>
      <Footer/>
    </Box>
  );
};

export default TermsOfService;
