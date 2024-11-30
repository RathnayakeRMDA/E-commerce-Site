import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginRequest, loginSuccess, loginFailure, registerSuccess } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Grid, TextField, Button, Typography, Paper, CircularProgress, IconButton } from '@mui/material';
import loginImage from '../../images/login1.jpg';
import Footer from '../Footer';
import { ArrowBack } from '@mui/icons-material';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, message, status } = useSelector((state) => state.auth);
  const [isRegistering, setIsRegistering] = useState(false); // Toggle between Login and Register views

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: Yup.object({
      name: Yup.string().when('isRegistering', {
        is: true,
        then: Yup.string().required('Name is required'),
      }),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      if (isRegistering) {
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        existingUsers.push({ name: values.name, email: values.email, password: values.password });
        localStorage.setItem('users', JSON.stringify(existingUsers));
        dispatch(registerSuccess()); // Dispatch registration success
        setIsRegistering(false); // Switch to login view
      } else {
        dispatch(loginRequest()); // Dispatch login request
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const user = storedUsers.find(
          (user) => user.email === values.email && user.password === values.password
        );
        if (user) {
          dispatch(loginSuccess({ name: user.name, email: user.email }));
          navigate('/products'); 
        } else {
          dispatch(loginFailure('Invalid credentials'));
        }
      }
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/products');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Box sx={{ backgroundImage: `url(${loginImage})`, backgroundSize: 'cover', height: '100vh' }}>
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Paper sx={{ padding: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 2, boxShadow: 3, width: '100%' }}>
          <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', marginBottom: 3 }}>
            {isRegistering ? 'Register' : 'Login'}
          </Typography>
          <IconButton 
            sx={{ position: 'absolute', top: 20, left: 20 }} 
            onClick={() => navigate('/')} 
            color="primary"
          >
            <ArrowBack />
          </IconButton>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              {isRegistering && (
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    type="text"
                    variant="outlined"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>
              )}
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
                  sx={{ padding: '12px 0', fontSize: '16px' }}
                  disabled={status === 'loading'} // Disable the button while loading
                >
                  {status === 'loading' ? <CircularProgress size={24} color="inherit" /> : isRegistering ? 'Register' : 'Login'}
                </Button>
              </Grid>
            </Grid>
          </form>

          {message && <Typography color="error" variant="body2" align="center" sx={{ marginTop: 2 }}>{message}</Typography>}

          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body2" align="center">
              {isRegistering ? (
                <>
                  Already have an account?{' '}
                  <Button onClick={() => setIsRegistering(false)} color="primary" sx={{ textTransform: 'none' }}>
                    Login here
                  </Button>
                </>
              ) : (
                <>
                  Don't have an account?{' '}
                  <Button onClick={() => setIsRegistering(true)} color="primary" sx={{ textTransform: 'none' }}>
                    Register here
                  </Button>
                </>
              )}
            </Typography>
          </Box>
        </Paper>
      </Container>
      <Footer/>
    </Box>
  );
};

export default Login;
