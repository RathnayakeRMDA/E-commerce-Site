import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../redux/cartSlice';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Container,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import Header from '../Header'; 
import Footer from '../Footer'; 

const PlaceOrder = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    contact: '',
    alternateContact: '',
    deliveryInstructions: '',
  });
  const [errors, setErrors] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false); 
  const cart = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const statesList = ['California', 'New York', 'Texas', 'Florida', 'Illinois'];

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'A valid email is required';
    }
    if (!form.address.trim()) newErrors.address = 'Address is required';
    if (!form.city.trim()) newErrors.city = 'City is required';
    if (!form.state.trim()) newErrors.state = 'State is required';
    if (!form.postalCode.trim() || !/^\d{5}$/.test(form.postalCode)) {
      newErrors.postalCode = 'Postal Code must be a 5-digit number';
    }
    if (!form.contact.trim() || !/^\d{10}$/.test(form.contact)) {
      newErrors.contact = 'Contact number must be 10 digits';
    }
    if (form.alternateContact && !/^\d{10}$/.test(form.alternateContact)) {
      newErrors.alternateContact = 'Alternate contact number must be 10 digits';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    setIsDialogOpen(true);
  };

  const handleConfirmOrder = () => {
    const order = {
      customerDetails: form,
      cartItems: cart,
      totalAmount: getTotalPrice(),
    };
    console.log('Order placed:', order);

    dispatch(clearCart());

    setIsDialogOpen(false);
    navigate('/products', { state: { order } });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="md" sx={{ mt: 4, flex: 1 }}>
        <Paper sx={{ padding: 4, boxShadow: 3 }}>
          <Typography variant="h4" align="center" sx={{ mb: 3 }}>
            Place Your Order
          </Typography>

          <Box component="form" noValidate autoComplete="off">
            <Grid container spacing={2}>           
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  error={!!errors.name}
                  helperText={errors.name}
                />
              </Grid>

       
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Contact Number"
                  type="text"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  error={!!errors.contact}
                  helperText={errors.contact}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Alternate Contact (Optional)"
                  type="text"
                  value={form.alternateContact}
                  onChange={(e) => setForm({ ...form, alternateContact: e.target.value })}
                  error={!!errors.alternateContact}
                  helperText={errors.alternateContact}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  multiline
                  rows={3}
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  error={!!errors.address}
                  helperText={errors.address}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="City"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  error={!!errors.city}
                  helperText={errors.city}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="State"
                  select
                  value={form.state}
                  onChange={(e) => setForm({ ...form, state: e.target.value })}
                  error={!!errors.state}
                  helperText={errors.state}
                >
                  {statesList.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Postal Code"
                  value={form.postalCode}
                  onChange={(e) => setForm({ ...form, postalCode: e.target.value })}
                  error={!!errors.postalCode}
                  helperText={errors.postalCode}
                />
              </Grid>
\
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Delivery Instructions (Optional)"
                  multiline
                  rows={2}
                  value={form.deliveryInstructions}
                  onChange={(e) => setForm({ ...form, deliveryInstructions: e.target.value })}
                />
              </Grid>
            </Grid>

            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Total Amount: ${getTotalPrice()}
              </Typography>
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Confirm Order
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
      <Footer />

      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>Order Confirmation</DialogTitle>
        <DialogContent>
          <Typography>
            Your order has been placed successfully! Thank you for shopping with us.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmOrder} color="primary" variant="contained">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PlaceOrder;
