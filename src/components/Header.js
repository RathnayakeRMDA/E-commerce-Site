import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  ButtonGroup,
  Button,
  IconButton,
  Badge,
  InputBase,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector((state) => state.cart.items);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = () => {
    if (searchQuery.trim() === '') return; // Prevent empty searches
    navigate(`/search-results?query=${encodeURIComponent(searchQuery)}`); // Redirect to search results page
  };

  
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={require('../images/logo.jpg')}
            alt="Yarn & Charm Logo"
            style={{ height: 40, marginRight: 10 }}
          />
          <Typography variant="h6" color="inherit" noWrap>
            Yarn & Charm
          </Typography>
        </Box>

        <ButtonGroup variant="text" sx={{ ml: 30 , gap: "15vh"}}>
          <Button component={Link} to="/products" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/top-sale" color="inherit">
            Top Sale
          </Button>
          <Button component={Link} to="/sale" color="inherit">
            Sale
          </Button>
          <Button component={Link} to="/about-us" color="inherit">
            About Us
          </Button>
          <Button component={Link} to="/contact-us" color="inherit">
            Contact Us
          </Button>
        </ButtonGroup>



        <IconButton color="inherit" component={Link} to="/cart" >
          <Badge badgeContent={cart.length} color="error" >
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit" component={Link} to="/">
          <PersonIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
