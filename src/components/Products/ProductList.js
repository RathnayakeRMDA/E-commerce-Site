import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Badge,
  Box,
  ButtonGroup,
  Container,
  Link
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import Footer from '../Footer';
import Header from '../Header';

// Import product images at the top of the file
import shirt from '../../images/shirt.jpg';
import jeans from '../../images/jeans.jpg';
import winterjacket from '../../images/winterjacket.jpg';
import snikers from '../../images/snikers.jpg';
import dress from '../../images/dress.jpg';
import woblouse from '../../images/woblouse.jpg';
import woskirt from '../../images/woskirt.jpg';
import woheels from '../../images/woheels.jpg';
import kshirt from '../../images/kshirt.jpg';
import kshort from '../../images/kshort.jpg';
import kjacket from '../../images/kjacket.jpg';
import kshoes from '../../images/kshoes.jpg';
import runningshoes from '../../images/runningshoes.jpg';
import boots from '../../images/boots.jpg';
import flipflops from '../../images/flipflops.jpg';

// Sample Product List divided into categories
const products = {
  men: [
    { id: 1, name: 'T-shirt', price: 19.99, description: 'Comfortable cotton T-shirt', image: shirt },
    { id: 2, name: 'Jeans', price: 39.99, description: 'Stylish denim jeans', image: jeans },
    { id: 3, name: 'Jacket', price: 59.99, description: 'Warm winter jacket', image: winterjacket },
    { id: 4, name: 'Sneakers', price: 69.99, description: 'Casual white sneakers', image: snikers }
  ],
  women: [
    { id: 5, name: 'Dress', price: 49.99, description: 'Elegant evening dress', image: dress },
    { id: 6, name: 'Blouse', price: 29.99, description: 'Floral printed blouse', image: woblouse },
    { id: 7, name: 'Skirt', price: 39.99, description: 'Stylish A-line skirt', image: woskirt },
    { id: 8, name: 'Heels', price: 79.99, description: 'Leather high heels', image: woheels }
  ],
  kids: [
    { id: 9, name: 'Kids T-shirt', price: 15.99, description: 'Colorful cotton T-shirt', image: kshirt },
    { id: 10, name: 'Shorts', price: 19.99, description: 'Comfortable kids shorts', image: kshort },
    { id: 11, name: 'Jacket', price: 29.99, description: 'Kids winter jacket', image: kjacket },
    { id: 12, name: 'Kids Shoes', price: 25.99, description: 'Comfy kids shoes', image: kshoes }
  ],
  shoes: [
    { id: 13, name: 'Running Shoes', price: 49.99, description: 'Comfortable running shoes', image: runningshoes },
    { id: 14, name: 'Boots', price: 89.99, description: 'Stylish boots for winter', image: boots },
    { id: 15, name: 'Flip Flops', price: 12.99, description: 'Casual flip-flops', image: flipflops },
  ]
};

// Styled components for better design
const SearchBar = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: theme.shape.borderRadius,
  padding: '5px 10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '60%',
  margin: '20px auto',
}));

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#ADD8E6',
  padding: '60px 0',
  textAlign: 'center',
  marginBottom: '30px',
}));

const ProductCard = styled(Card)(({ theme }) => ({
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
}));

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredProducts = Object.keys(products).reduce((result, category) => {
    result[category] = products[category].filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return result;
  }, {});

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box sx={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />
      {/* Hero Section */}
      <HeroSection>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff' }}>
          Welcome to Our Cloths Shop
        </Typography>
        <Typography variant="h6" color="white" sx={{ mt: 2 }}>
          Discover a wide range of Cloths for all occasions. Shop now for the perfect clothes!
        </Typography>
      </HeroSection>

      {/* Search Bar */}
      <SearchBar>
        <InputBase
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ flex: 1 }}
        />
        <IconButton color="primary" onClick={() => navigate(`/search-results?query=${encodeURIComponent(searchQuery)}`)}>
          <SearchIcon />
        </IconButton>
      </SearchBar>

      <Container sx={{ marginTop: 5 }}>
        {/* Men Products */}
        <Typography variant="h4" sx={{ marginBottom: 3, color: '#333' }}>Men</Typography>
        <Grid container spacing={3}>
          {filteredProducts.men?.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard>
                <CardMedia
                  component="img"
                  height="250"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{product.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{product.description}</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 1 }}>${product.price.toFixed(2)}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="primary" onClick={() => dispatch(addToCart(product))}>
                    Add to Cart
                  </Button>
                </CardActions>
              </ProductCard>
            </Grid>
          ))}
        </Grid>

        {/* Other Categories */}
        {['women', 'kids', 'shoes'].map((category) => (
          <React.Fragment key={category}>
            <Typography variant="h4" sx={{ marginTop: 5, marginBottom: 3, color: '#333' }}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Typography>
            <Grid container spacing={3}>
              {filteredProducts[category]?.map((product) => (
                <Grid item xs={12} sm={6} md={3} key={product.id}>
                  <ProductCard>
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.image}
                      alt={product.name}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{product.name}</Typography>
                      <Typography variant="body2" color="textSecondary">{product.description}</Typography>
                      <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 1 }}>${product.price.toFixed(2)}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" variant="contained" color="primary" onClick={() => dispatch(addToCart(product))}>
                        Add to Cart
                      </Button>
                    </CardActions>
                  </ProductCard>
                </Grid>
              ))}
            </Grid>
          </React.Fragment>
        ))}
      </Container>

      <Footer />
    </Box>
  );
};

export default ProductList;
