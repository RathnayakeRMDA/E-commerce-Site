import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser, registerUserSuccess, registerUserFailure } from '../../redux/userSlice';
import { Box, Container, Grid, TextField, Button, Typography, Paper, IconButton } from '@mui/material';
import registerImage from '../../images/login11.jpg'; 
import Footer from '../Footer';
import { ArrowBack } from '@mui/icons-material'; 

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .length(5, 'Password must be exactly 5 characters long')  // Password must be exactly 5 characters
        .matches(/(?=.*[a-z])/, 'Password must contain at least one lowercase letter')  // At least one lowercase letter
        .matches(/(?=.*[A-Z])/, 'Password must contain at least one uppercase letter')  // At least one uppercase letter
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

      const isEmailExist = existingUsers.some(user => user.email === values.email);
      const isNameExist = existingUsers.some(user => user.name === values.name);

      if (isEmailExist) {
        formik.setErrors({ email: 'Email is already taken' });
        return;
      }

      if (isNameExist) {
        formik.setErrors({ name: 'Name is already taken' });
        return;
      }

      dispatch(registerUser());

      setTimeout(() => {
        existingUsers.push({ name: values.name, email: values.email, password: values.password });
        localStorage.setItem('users', JSON.stringify(existingUsers));
        dispatch(registerUserSuccess(values));
        navigate('/');
      }, 1000);
    },
  });

  return (
    <Box sx={{ backgroundImage: `url(${registerImage})`, backgroundSize: 'cover', height: '100vh' }}>
      <Container maxWidth="sm" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Paper
          sx={{
            padding: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 2,
            boxShadow: 3,
            width: '100%',
            position: 'relative',
          }}
        >
          <IconButton 
            sx={{ position: 'absolute', top: 20, left: 20 }} 
            onClick={() => navigate('/')} // Navigate to the landing page
            color="primary"
          >
            <ArrowBack />
          </IconButton>

          <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', marginBottom: 3 }}>
            Register
          </Typography>

          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  variant="outlined"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ padding: '10px 0', fontSize: '16px' }}
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
};

export default Register;
