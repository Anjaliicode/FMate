import React from 'react';
import { Box, Typography, Button, Chip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import flat1 from "../assets/flat1.png";
import flat2 from "../assets/flat2.png";
import flat3 from "../assets/flat3.png";
import { useNavigate } from 'react-router-dom';

const FlatListingsPage = () => {
  const navigate = useNavigate();
  const handleLogin= () => {
    navigate("/emailverification");
  }
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
    },
    
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: { xs: 3, md: 4 },
        maxWidth: "1400px",
        mx: "auto",
        width: "100%",
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 2, sm: 0 }
      }}>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: { xs: "32px", md: "40px" },
            lineHeight: { xs: "48px", md: "60px" },
            color: "#082E66",
          }}
        >
          FMate
        </Typography>
        
        <Button
          variant="contained"
          onClick={handleLogin}
          sx={{
            backgroundColor: '#0A0A23',
            borderRadius: '20px',
            textTransform: 'none',
            fontFamily: 'Poppins',
            fontSize: '14px',
            px: 3,
            py: 1,
            // onClick:{handleLogin},
            width: { xs: '100%', sm: 'auto' },
            '&:hover': { backgroundColor: '#2A2A43' }
          }}
        >
          Join the community
        </Button>
      </Box>

      {/* Content Container */}
      <Box sx={{ maxWidth: "1400px", mx: "auto", width: "100%" }}>
        {/* Title */}
        <a href="/" style={{ textDecoration: 'none' }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontSize: { xs: '32px', md: '68px' },
            mb: { xs: 3, md: 8 },
            color: '#000',
            textAlign: 'center'
          }}
        >
          Flat Listings
        </Typography>
        </a>
        {/* Filter Chips */}
        <Box sx={{ 
          display: 'flex', 
          gap: 1.5, 
          mb: { xs: 3, md: 4 },
          overflow: 'auto',
          pb: 1,
          flexWrap:'wrap',
          '::-webkit-scrollbar': { display: 'none' }
        }}>
          {['All Posts', 'Flat Required', 'Flatmate Required', 'Location'].map((filter) => (
            <Chip
              key={filter}
              label={filter}
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 600,  
                backgroundColor: filter === 'All Posts' ? '#DEDEDE' : 'transparent',
                border: '2px solid #181819',
                borderRadius: '20px',
                px: 1,
                whiteSpace: 'nowrap',
                '&:hover': { backgroundColor: '#E2E8F0' }
              }}
              clickable
            />
          ))}
        </Box>

        {/* Listings */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {listings.map((listing) => (
            <Box key={listing.id}>
              <Box sx={{ 
                display: 'flex',
               
                flexDirection: { xs: 'column', md: 'row' },
                gap: 3,
                backgroundColor: 'white',
                mb: 5,
                // borderBottom:"2px dotted black",
              }}>
                {/* Image Container */}
                <Box sx={{ 
                  width: { xs: "100%", md: "60%" },
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
                        top: '4px',
                        right: '12px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        fontSize: '12px',
                        py: 1,
                        px: 1.8,
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
                  // justifyContent: 'center',
                  // gap: 1,
                  pl: { xs: 2, md: 8}
                }}>
                  <Typography
                    sx={{
                      fontFamily: 'Poppins',
                      fontWeight: 600,
                      fontSize: { xs: '20px', md: '32px' },
                      // mb: 0.5
                    }}
                  >
                    {listing.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: 'Poppins',
                      fontWeight:"500",
                      fontSize: '14px',
                      // color: '#666',
                      mb: 4
                    }}
                  >
                    {listing.college}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
                    <LocationOnIcon sx={{  fontSize: '30px' }} />
                    <Typography
                      sx={{
                        fontFamily: 'Poppins',
                        fontSize: '14px',
                        
                      }}
                    >
                      {listing.location}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: 'Poppins',
                      fontSize: '14px',
                     pl:5,
                    }}
                  >
                    Rent: {listing.rent}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: 'Poppins',
                      fontSize: '14px',
                     pl:5,
                      mb: 8
                    }}
                  >
                    Available From: {listing.availableFrom}
                  </Typography>

                  <Button
                    // variant="outlined"
                    sx={{
                      borderColor: '#E2E8F0',
                      color: '#000',
                      textTransform: 'none',
                      fontFamily: 'Poppins',
                      borderRadius: '20px',
                      width: { xs: '100%', md: 'fit-content' },
                      px: 3,
                      backgroundColor: "#DEDEDE",
                      border:"2px solid #181819",
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