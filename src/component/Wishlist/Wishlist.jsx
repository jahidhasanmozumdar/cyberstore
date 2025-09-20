import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, IconButton, Box, Button } from '@mui/material';
import { Favorite } from '@mui/icons-material';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) setWishlist(JSON.parse(saved));
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter(item => item._id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', my: 6 }}>
      <Typography variant="h4" fontWeight={700} mb={4} align="center">My Wishlist</Typography>
      {wishlist.length === 0 ? (
        <Typography align="center">Your wishlist is empty.</Typography>
      ) : (
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }, gap: 3 }}>
          {wishlist.map(product => (
            <Card key={product._id} sx={{ boxShadow: 4, borderRadius: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardMedia
                component="img"
                image={product.image_url}
                alt={product.name}
                sx={{ height: 220, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" fontWeight={600}>{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">${product.price}</Typography>
                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  <Button component={Link} to={`/product/${product._id}`} variant="contained" color="primary">View Details</Button>
                  <IconButton onClick={() => removeFromWishlist(product._id)} color="error">
                    <Favorite />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Wishlist;
