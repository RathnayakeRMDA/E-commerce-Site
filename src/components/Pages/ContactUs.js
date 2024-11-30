import React from 'react';
import { Box, TextField, Button, Typography, CircularProgress, Alert, AppBar, Toolbar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setField, setLoading, setSuccess, setError } from '../../redux/contactSlice';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.jpg'; 
import Footer from '../Footer';
import Header from '../Header';

const ContactUsPage = () => {
  const dispatch = useDispatch();
  const { name, email, message, loading, success, error } = useSelector((state) => state.contact);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setField({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    setTimeout(() => {
      if (name && email && message) {
        dispatch(setSuccess());
        dispatch(setLoading(false));
      } else {
        dispatch(setError('Please fill all fields.'));
        dispatch(setLoading(false));
      }
    }, 2000);
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
      <Header />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: 2 }}>
        <Box sx={{ maxWidth: 600, width: '100%', padding: 3, backgroundColor: 'white', borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h4" align="center" sx={{ marginBottom: 3 }}>
            Contact Us
          </Typography>

          {success && (
            <Alert severity="success" sx={{ marginBottom: 2 }}>
              Thank you for your message! We will get back to you soon.
            </Alert>
          )}
          {error && (
            <Alert severity="error" sx={{ marginBottom: 2 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={name}
              onChange={handleInputChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={email}
              onChange={handleInputChange}
              margin="normal"
              required
              type="email"
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={message}
              onChange={handleInputChange}
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ width: '200px' }}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ContactUsPage;
