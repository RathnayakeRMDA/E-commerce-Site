import React, { useState } from 'react';
import { Box, Grid, Card, CardMedia, CardContent, CardActions, Button, Typography, InputBase, Paper, IconButton, Badge } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import Header from '../Header';
import Footer from '../Footer';
import SearchIcon from '@mui/icons-material/Search';

// Sample Sale Products
const saleProducts = [
  { id: 1, name: 'Summer T-shirt', price: 14.99, description: 'Discounted summer T-shirt', image: require('../../images/shirt.jpg') },
  { id: 2, name: 'Discount boots', price: 34.99, description: 'Stylish Boots at a discounted price', image: require('../../images/boots.jpg') },
  { id: 3, name: 'Dress Sale', price: 39.99, description: 'Hot sale on dress', image: require('../../images/dress.jpg') },
];

const SalePage = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = saleProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f1f1f1' }}>
      <Header />

      <Box sx={{ 
        backgroundColor: '#FF6347', 
        padding: '50px 0', 
        textAlign: 'center', 
        color: '#fff', 
        fontFamily: 'Arial, sans-serif' 
      }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '3rem' , color: '#fff'}}>
          Black Friday Mega Sale!
        </Typography>
        <Typography variant="h5" sx={{ mt: 2, fontStyle: 'italic' }}>
          Up to 70% off on selected items. Hurry up before it’s gone!
        </Typography>
      </Box>

      {/* Search Bar */}
      <Box sx={{ padding: 3, textAlign: 'center' }}>
        <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60%', margin: 'auto', padding: 1, borderRadius: 1, boxShadow: 3 }}>
          <InputBase
            sx={{ flex: 1, padding: '10px', fontSize: '16px' }}
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>

      {/* Sale Products */}
      <Box sx={{ padding: 5 }}>
        <Typography variant="h3" align="center" sx={{ marginBottom: 4, fontWeight: 'bold' }}>
          Our Best Deals
        </Typography>

        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{
                boxShadow: 3,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 8
                }
              }}>
                <Badge
                  color="error"
                  badgeContent="SALE"
                  sx={{ position: 'absolute', top: 16, right: 16, zIndex: 1 }}
                />
                <CardMedia
                  component="img"
                  height="300"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      transition: 'transform 0.3s ease'
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
                    color="primary"
                    sx={{
                      textTransform: 'none',
                      fontWeight: 'bold',
                      padding: '10px 30px',
                      '&:hover': {
                        backgroundColor: '#FF4500'
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

export default SalePage;
