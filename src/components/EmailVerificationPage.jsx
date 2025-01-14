import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import email from "../assets/email.png";
import { useNavigate } from "react-router-dom";

const VerificationCodePage = () => {
  const navigate = useNavigate();
  
  const handleVerify = () => {
    navigate("/verificationcode");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: "#ffffff",
        overflow: {md:"hidden"},
      }}
    >
      {/* Left Section with Logo and Image */}
      <Box
        sx={{
          flex: { xs: "0 0 auto", md: "0.5" },
          display: "flex",
          flexDirection: "column",
          position: "relative",
          height: { xs: "45vh", md: "100vh" },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: { xs: "32px", md: "40px" },
            lineHeight: "60px",
            color: "#082E66",
            p: 4,
          }}
        >
          FMate
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "center", md: "flex-end" },
            justifyContent: { xs: "center", md: "flex-end" },
            height: "100%",
            width: "100%",
            position: "relative",
            right: { xs: 0, md: "70px" },
            pb: { xs: 2, md: 0 },
          }}
        >
          <img
            src={email}
            alt="Students illustration"
            style={{
              width: "90%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>

      {/* Right Section with Email Input */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: {xs:"center",md:"start"},
          alignItems: "center",
          px: { xs: 3, md: 4 },
          py: { xs: 16, md: 14 },
          
          maxWidth: { xs: "100%", md: "50%" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: { xs: "33px", md: "35px" },
              textAlign: "center",
              mb: 1,
            }}
          >
            Enter College Email
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontFamily: "Poppins",
              color: "text.secondary",
              // textAlign: "center",
              mb: 3,
              fontSize: "12px",
            }}
          >
            We'll send you a 6 digit verification code to verify your college
          </Typography>

          <TextField
            fullWidth
            variant="outlined"
            size="medium"
            placeholder="Enter your college email"
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: '18px',
                backgroundColor: '#fff',
              }
            }}
          />

          <Button
            variant="contained"
            onClick={handleVerify}
            fullWidth
            sx={{
              backgroundColor: "#010C24",
              color: "#fff",
              borderRadius: "30px",
              py: 1.5,
              textTransform: "none",
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "16px",
              mb: 3,
              maxWidth: {sx:"100%",md:"200px"},
              '&:hover': {
                backgroundColor: "#2A2A43",
              }
            }}
          >
            Verify Now
          </Button>

          <Box
            sx={{
              display: "flex",
              gap: 0.5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "14px",
                color: "#666666",
              }}
            >
              Don't have a college email?
            </Typography>
            <Button
              href="#"
              sx={{
                fontFamily: "Poppins",
                fontSize: "14px",
                color: "#010C24",
                textTransform: "none",
                fontWeight: 600,
                p: 0,
                minWidth: "auto",
                '&:hover': {
                  backgroundColor: "transparent",
                  textDecoration: "underline",
                }
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VerificationCodePage;