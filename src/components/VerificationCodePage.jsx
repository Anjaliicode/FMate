import React, { useState } from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import email from "../assets/email.png";
import { useNavigate } from "react-router-dom";

const VerificationCodePage = () => {
  const navigate = useNavigate();
  function flatlisthandle() {
    navigate("/flatlistings");
  }

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        backgroundColor: "#ffffff",
        overflow: "hidden",
        // border: "2px solid black",
      }}
    >
      {/* Left Section with Logo and Image */}
      <Box
        sx={{
          flex: { xs: "1", md: "0.5" },
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          // p: 4,
          position: "relative",
          border: "2px solid black",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "40px",
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
            alignItems: "flex-end",
            justifyContent: "flex-end",
            height: "100%",
            width: "100%",
            position: "relative",
            // top:"60px",
            right: "70px",
          }}
        >
          <img
            src={email}
            alt="Students waving"
            style={{
              width: "90%",
              maxHeight: "100vh",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>

      {/* Right Section with Verification Code */}
      <Box
        sx={{
          flex: { xs: "1", md: "1" },
          display: "flex",
          flexDirection: "column",

          pt: 14,
          pl: 28,

          maxWidth: { xs: "100%", md: "900px" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "36px",
            lineHeight: "54px",
            mb: 1,
          }}
        >
          Enter Verification Code
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: "Poppins",
            fontWeight: 300,
            fontSize: "14px",
            lineHeight: "24px",
            color: "text.secondary",
            mb: 4,
          }}
        >
          We sent you a 6 digit verification code on abc@gmail.com
        </Typography>

        {/* Verification Code Input */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 4,
            justifyContent: "space-between",
          }}
        >
          <input
            type="text"
            style={{
              width: "48px",
              height: "48px",
              textAlign: "center",
              fontSize: "24px",
              border: "1px solid #E2E8F0",
              borderRadius: "8px",
              outline: "none",
            }}
            maxLength={1}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            //  py:1,
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "14px",
              color: "#666666",
            }}
          >
            Didn't receive the code?
          </Typography>
          <Link
            href="#"
            sx={{
              fontFamily: "Poppins",
              fontSize: "14px",
              color: "#082E66",
              textDecoration: "none",
              fontWeight: 500,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Resend
          </Link>
        </Box>

        <Button
          variant="contained"
          width="50%"
          // fullWidth
          onClick={flatlisthandle}
          sx={{
            backgroundColor: "#010C24",
            color: "#fff",
            borderRadius: "30px",
            mt: 4,
            py: 1,
            textTransform: "none",
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "16px",
            mb: 3,
            width: "50%",
            "&:hover": {
              backgroundColor: "#2A2A43",
            },
          }}
        >
          Verify Now
        </Button>
      </Box>
    </Box>
  );
};

export default VerificationCodePage;
