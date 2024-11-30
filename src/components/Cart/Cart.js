import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
  Tooltip,
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { addToCart, updateQuantity, removeFromCart, clearCart } from '../../redux/cartSlice';
import Header from '../Header';
import Footer from '../Footer';

const Cart = () => {
  const cart = useSelector((state) => state.cart.items); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getCartTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0);

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Add items to place an order.');
      return;
    }

    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
      items: cart,
      total: getCartTotal(),
      date: new Date().toLocaleString(),
    };
    existingOrders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    dispatch(clearCart());

    alert('Order placed successfully!');

    navigate('/order-history');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: 3 }}>
      <Header />

      {cart.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 5 }}>
          Your cart is empty!
        </Typography>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            {cart.map((item, index) => (
              <Card key={index} sx={{ display: 'flex', marginBottom: 2, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 120, height: 120, objectFit: 'cover' }}
                  image={item.image}
                  alt={item.name}
                />
                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    ${item.price.toFixed(2)}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                    <Tooltip title="Decrease Quantity">
                      <IconButton
                        onClick={() => dispatch(updateQuantity({ index, action: 'decrease' }))}
                        disabled={item.quantity === 1}
                      >
                        <Remove />
                      </IconButton>
                    </Tooltip>
                    <Typography variant="body1" sx={{ margin: '0 10px' }}>
                      {item.quantity}
                    </Typography>
                    <Tooltip title="Increase Quantity">
                      <IconButton
                        onClick={() => dispatch(updateQuantity({ index, action: 'increase' }))}
                      >
                        <Add />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </CardContent>
                <Tooltip title="Remove Item">
                  <IconButton
                    onClick={() => dispatch(removeFromCart(index))}
                    sx={{ alignSelf: 'center', marginRight: 2, color: 'red' }}
                  >
                    <Delete />
                  </IconButton>
                </Tooltip>
              </Card>
            ))}
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 4, padding: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                Order Summary
              </Typography>
              <Typography variant="body1">
                <strong>Total Items:</strong> {getTotalItems()}
              </Typography>
              <Typography variant="body1">
                <strong>Total Price:</strong> ${getCartTotal()}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
                onClick={() => navigate('/')}
              >
                Continue Shopping
              </Button>
              <Button
                variant="contained"
                color="success"
                fullWidth
                sx={{ mt: 2 }}
                onClick={() => navigate('/place-order')}
              >
                Place Order
              </Button>
            </Card>
          </Grid>
        </Grid>
      )}
      <Footer />
    </Box>
  );
};

export default Cart;
