import React from 'react';
import { Box, Container, Typography, Link, AppBar, Toolbar, Button, IconButton, ButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Header from '../Header';
import Footer from '../Footer';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#1976d2',
}));

const HeaderLinks = styled(ButtonGroup)(({ theme }) => ({
  marginLeft: theme.spacing(3),
}));

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const navigateToPage = (route) => {
    navigate(route);
  };

  return (
    <Box sx={{ fontFamily: 'Arial, sans-serif', padding: '20px 0' }}>
     <Header/>

      {/* Privacy Policy Content */}
      <Container sx={{ maxWidth: '800px', margin: '0 auto', padding: '20px 0' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          Privacy Policy
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold' }}>
          1. Introduction
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          At Yarn & Charm, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you visit our website or use our services. By accessing or using our services, you agree to the collection and use of your data in accordance with this policy.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold' }}>
          2. Information We Collect
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          We may collect the following types of information:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">Personal Information: This includes details such as your name, email address, phone number, and shipping address.</Typography>
          </li>
          <li>
            <Typography variant="body1">Payment Information: When you make a purchase, we may collect payment-related information, such as credit card details.</Typography>
          </li>
          <li>
            <Typography variant="body1">Usage Data: We may collect information on how you interact with our website, such as pages viewed, time spent on the site, and the links you click.</Typography>
          </li>
        </ul>

        <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold' }}>
          3. How We Use Your Information
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          The information we collect may be used for the following purposes:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">To process orders and deliver products to you.</Typography>
          </li>
          <li>
            <Typography variant="body1">To communicate with you regarding your orders, inquiries, and updates about our services.</Typography>
          </li>
          <li>
            <Typography variant="body1">To personalize your shopping experience by providing relevant content and promotions.</Typography>
          </li>
          <li>
            <Typography variant="body1">To improve our website and services based on user feedback and usage data.</Typography>
          </li>
        </ul>

        <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold' }}>
          4. Sharing Your Information
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          We do not sell, rent, or lease your personal information to third parties. However, we may share your information in the following situations:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">With third-party service providers who assist us in operating our website and processing payments (e.g., payment processors, shipping companies).</Typography>
          </li>
          <li>
            <Typography variant="body1">If required by law, such as in response to a legal process or to protect the rights and safety of our customers.</Typography>
          </li>
        </ul>

        <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold' }}>
          5. Data Security
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          We take the security of your personal data seriously and implement reasonable security measures to protect it from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee the absolute security of your information.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold' }}>
          6. Your Rights
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Depending on your location, you may have certain rights related to your personal information, including:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">The right to access and update your personal information.</Typography>
          </li>
          <li>
            <Typography variant="body1">The right to request the deletion of your personal information (subject to legal limitations).</Typography>
          </li>
          <li>
            <Typography variant="body1">The right to opt-out of receiving marketing communications from us.</Typography>
          </li>
        </ul>

        <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold' }}>
          7. Changes to This Privacy Policy
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. We will notify you of any material changes by posting the updated Privacy Policy on this page. Please review this page periodically for updates.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold' }}>
          8. Contact Us
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at:
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Email: <Link href="mailto:contact@yarnandcharm.com">contact@yarnandcharm.com</Link>
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Phone: 011-2 227 894
        </Typography>
      </Container>
      <Footer/>
    </Box>
  );
};

export default PrivacyPolicy;
