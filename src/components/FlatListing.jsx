import React from 'react';
import { Box, Typography, Button, Chip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import flat1 from "../assets/flat1.png";
import flat2 from "../assets/flat2.png";
import flat3 from "../assets/flat3.png";

const FlatListingsPage = () => {
  const listings = [
    {
      id: 1,
      name: 'Arsalan Saad',
      college: 'IIM Calcutta',
      location: 'Bangalore, India',
      rent: '₹30,000',
      availableFrom: '8th January',
      image: flat1,
      verified: true
    },
    {
      id: 2,
      name: 'Peepee Pandey',
      college: 'IIM Calcutta',
      location: 'Bangalore, India',
      rent: '₹40,000',
      availableFrom: '8th January',
      image: flat2,
      verified: true
    },
    {
      id: 3,
      name: 'Arun Yadav',
      college: 'IIM Calcutta',
      location: 'Bangalore, India',
      rent: '₹40,000',
      availableFrom: '8th January',
      image: flat3,
      verified: true
    }
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 2 }, backgroundColor: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 4,
        maxWidth: "1200px",
        mx: "auto",
        width: "100%"
      }}>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: "24px",
            color: '#082E66'
          }}
        >
          FMate
        </Typography>
        
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#0A0A23',
            borderRadius: '20px',
            textTransform: 'none',
            fontFamily: 'Poppins',
            fontSize: '14px',
            px: 3,
            py: 1,
            '&:hover': { backgroundColor: '#2A2A43' }
          }}
        >
          Join the community
        </Button>
      </Box>

      {/* Content Container */}
      <Box sx={{ maxWidth: "1200px", mx: "auto", width: "100%" }}>
        {/* Title */}
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontSize: '48px',
            mb: 4,
            color: '#000'
          }}
        >
          Flat Listings
        </Typography>

        {/* Filter Chips */}
        <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
          {['All Posts', 'Flat Required', 'Flatmate Required', 'Location'].map((filter) => (
            <Chip
              key={filter}
              label={filter}
              sx={{
                fontFamily: 'Poppins',
                backgroundColor: filter === 'All Posts' ? '#E2E8F0' : 'transparent',
                border: '1px solid #E2E8F0',
                borderRadius: '20px',
                px: 1,
                '&:hover': { backgroundColor: '#E2E8F0' }
              }}
              clickable
            />
          ))}
        </Box>

        {/* Listings */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {listings.map((listing, index) => (
            <Box key={listing.id}>
              <Box sx={{ 
                display: 'flex',
                gap: 3,
                backgroundColor: 'white',
              }}>
                {/* Image Container */}
                <Box sx={{ 
                  width: "70%",
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}>
                  <img
                    src={listing.image}
                    alt={`Flat by ${listing.name}`}
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover'
                    }}
                  />
                  {listing.verified && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        fontSize: '12px',
                        py: 0.5,
                        px: 1.5,
                        borderRadius: '4px',
                        fontFamily: 'Poppins',
                      }}
                    >
                      Verified
                    </Box>
                  )}
                </Box>

                {/* Content Section */}
                <Box sx={{ 
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: 1
                }}>
                  <Typography
                    sx={{
                      fontFamily: 'Poppins',
                      fontWeight: 500,
                      fontSize: '24px',
                      mb: 0.5
                    }}
                  >
                    {listing.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: 'Poppins',
                      fontSize: '14px',
                      color: '#666',
                      mb: 1
                    }}
                  >
                    {listing.college}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <LocationOnIcon sx={{ color: '#666', fontSize: '20px' }} />
                    <Typography
                      sx={{
                        fontFamily: 'Poppins',
                        fontSize: '14px',
                        color: '#666'
                      }}
                    >
                      {listing.location}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: 'Poppins',
                      fontSize: '14px',
                      color: '#666'
                    }}
                  >
                    Rent: {listing.rent}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: 'Poppins',
                      fontSize: '14px',
                      color: '#666',
                      mb: 2
                    }}
                  >
                    Available From: {listing.availableFrom}
                  </Typography>

                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: '#E2E8F0',
                      color: '#000',
                      textTransform: 'none',
                      fontFamily: 'Poppins',
                      borderRadius: '20px',
                      width: 'fit-content',
                      px: 3,
                      '&:hover': {
                        borderColor: '#CBD5E0',
                        backgroundColor: '#f8f9fa'
                      }
                    }}
                  >
                    Interested
                  </Button>
                </Box>
              </Box>
              
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FlatListingsPage;