import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PeopleAltOutlined from "@mui/icons-material/PeopleAltOutlined";
import ApartmentOutlined from "@mui/icons-material/ApartmentOutlined";
import ArrowForwardOutlined from "@mui/icons-material/ArrowForwardOutlined";

const SelectionPage = () => {
  const navigate = useNavigate();

  const handleFlatmateSearch = () => {
    navigate("/roomrequirements");
  };

  const handleFlatSearch = () => {
    navigate("/roomrequirements");
  };

  return (
    <Box
      component="main"
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#ffffff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Navbar */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "1rem", md: "2rem" },
          left: { xs: "1rem", md: "2rem" },
        }}
      >
          <a href="/" style={{ textDecoration: 'none' }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: { xs: "28px", md: "36px" },
            lineHeight: { xs: "42px", md: "54px" },
            color: "#082E66",
          }}
        >
          FMate
        </Typography>
        </a>  
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            width: "100%",
            pt: { xs: "60px", md: "0" },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 400,
              fontFamily: "Poppins",
              textAlign: "center",
              fontSize: { xs: "1.75rem", sm: "2rem", md: "3rem" },
              mb: { xs: 1, sm: 2 },
              color: "#1a1a1a",
            }}
          >
            What are you looking for?
          </Typography>

          <Typography
            sx={{
              fontFamily: "Poppins",
              textAlign: "center",
              fontSize: { xs: "0.875rem", sm: "1rem" },
              color: "rgb(105, 103, 103)",
              mb: { xs: 3, sm: 4 },
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Choose your journey to find the perfect living situation
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2, md: 4 },
              px: { xs: 1, md: 2 },
              maxHeight: { xs: "calc(100vh - 200px)", md: "450px" },
            }}
          >
            {/* Flatmate Option */}
            <Paper
              elevation={0}
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "20px",
                padding: { xs: "1.5rem 1rem", sm: "2rem", md: "2rem" },
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)",
                  borderColor: "#164DCD",
                },
              }}
              onClick={handleFlatmateSearch}
            >
              <Box
                sx={{
                  backgroundColor: "rgba(22, 77, 205, 0.1)",
                  borderRadius: "50%",
                  p: { xs: 2, md: 3 },
                  mb: { xs: 2, md: 3 },
                }}
              >
                <PeopleAltOutlined
                  sx={{
                    fontSize: { xs: "2.5rem", md: "3rem" },
                    color: "#164DCD",
                  }}
                />
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                  mb: 1,
                  textAlign: "center",
                  color: "#1a1a1a",
                }}
              >
                Looking for a Flatmate
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 300,
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  color: "rgb(105, 103, 103)",
                  mb: { xs: 2, md: 3 },
                  textAlign: "center",
                }}
              >
                Connect with verified students who are looking to share accommodations
              </Typography>
              <Button
                variant="contained"
                endIcon={<ArrowForwardOutlined />}
                sx={{
                  backgroundColor: "#164DCD",
                  borderRadius: "30px",
                  padding: { xs: "8px 24px", md: "12px 32px" },
                  fontFamily: "Poppins",
                  textTransform: "none",
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  "&:hover": {
                    backgroundColor: "#1142AB",
                    transform: "translateX(5px)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                Find Flatmate
              </Button>
            </Paper>

            {/* Flat Option */}
            <Paper
              elevation={0}
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "20px",
                padding: { xs: "1.5rem 1rem", sm: "2rem", md: "2rem" },
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)",
                  borderColor: "#0A0A23",
                },
              }}
              onClick={handleFlatSearch}
            >
              <Box
                sx={{
                  backgroundColor: "rgba(10, 10, 35, 0.1)",
                  borderRadius: "50%",
                  p: { xs: 2, md: 3 },
                  mb: { xs: 2, md: 3 },
                }}
              >
                <ApartmentOutlined
                  sx={{
                    fontSize: { xs: "2.5rem", md: "3rem" },
                    color: "#0A0A23",
                  }}
                />
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                  mb: 1,
                  textAlign: "center",
                  color: "#1a1a1a",
                }}
              >
                Looking for a Flat
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 300,
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  color: "rgb(105, 103, 103)",
                  mb: { xs: 2, md: 3 },
                  textAlign: "center",
                }}
              >
                Browse through verified listings to find your perfect accommodation
              </Typography>
              <Button
                variant="contained"
                onClick={handleFlatSearch}
                endIcon={<ArrowForwardOutlined />}
                sx={{
                  backgroundColor: "#0A0A23",
                  borderRadius: "30px",
                  padding: { xs: "8px 24px", md: "12px 32px" },
                  fontFamily: "Poppins",
                  textTransform: "none",
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  "&:hover": {
                    backgroundColor: "#2A2A43",
                    transform: "translateX(5px)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                Find Flat
              </Button>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SelectionPage;

