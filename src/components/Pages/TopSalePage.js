import React, { useState } from 'react';
import { Box, Grid, Card, CardMedia, CardContent, CardActions, Button, Typography, InputBase, Paper, IconButton, Badge } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import Header from '../Header';
import Footer from '../Footer';
import SearchIcon from '@mui/icons-material/Search';

const topSaleProducts = [
  { id: 1, name: 'Limited Edition T-shirt', price: 24.99, description: 'Exclusive design', image: require('../../images/shirt.jpg') },
  { id: 2, name: 'Premium Jeans', price: 49.99, description: 'Comfortable and stylish', image: require('../../images/jeans.jpg') },
  { id: 3, name: 'Winter Jacket', price: 79.99, description: 'Warm and cozy for winter', image: require('../../images/winterjacket.jpg') },
  { id: 4, name: 'Luxury Dress', price: 99.99, description: 'Elegant evening wear', image: require('../../images/dress.jpg') },
  { id: 5, name: 'Sport Sneakers', price: 59.99, description: 'Stylish sneakers for every occasion', image: require('../../images/snikers.jpg') },
];

const TopSalePage = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = topSaleProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
      <Header />
      <Box sx={{
        padding: '60px 0',
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        borderBottom: '5px solid #FF4500',
        backgroundColor: '#ADD8E6'
      }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '3.5rem', color: '#fff' }}>
          Top Sale - Limited Time Offers!
        </Typography>
        <Typography variant="h5" sx={{ mt: 2, fontStyle: 'italic', fontSize: '1.2rem', color: '#fff' }}>
          Exclusive discounts on our best-selling items. Don’t miss out!
        </Typography>
      </Box>

      {/* Search Bar */}
      <Box sx={{ padding: 3, textAlign: 'center' }}>
        <Paper sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '60%',
          margin: 'auto',
          padding: 1,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: '#fff',
          marginBottom: 5
        }}>
          <InputBase
            sx={{ flex: 1, padding: '5px', fontSize: '16px' }}
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IconButton type="submit" sx={{ p: '10px', color: '#ADD8E6' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>

      <Box sx={{}}>

        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{
                boxShadow: 8,
                borderRadius: 2,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 16
                }
              }}>
                <Badge
                  color="error"
                  badgeContent="SALE"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    zIndex: 1,
                    backgroundColor: '#FF4500'
                  }}
                />
                <CardMedia
                  component="img"
                  height="250"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    }
                  }}
                />
                <CardContent sx={{ padding: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
                    {product.description}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#FF6347' }}>
                    ${product.price.toFixed(2)}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button
                    size="large"
                    variant="contained"
                    sx={{
                      textTransform: 'none',
                      fontWeight: 'bold',
                      padding: '10px 30px',
                      '&:hover': {
                        backgroundColor: 'blue'
                      }
                    }}
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};

export default TopSalePage;
