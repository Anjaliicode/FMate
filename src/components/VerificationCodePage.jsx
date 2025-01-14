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
          height: { xs: "35vh", md: "100vh" },
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
          }}
        >
          <img
            src={email}
            alt="Students waving"
            style={{
              width: "90%",
              maxHeight: "100%",
              objectFit: "contain",
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
          pt: { xs: 24, md: 20 },
          pl: { xs: 4, md: 28 },
          pr: { xs: 4, md: 0 },
          maxWidth: { xs: "100%", md: "900px" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: { xs: "32px", md: "36px" },
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
            gap: 1,
            mb: 4,
            justifyContent: { xs: "space-between", md: "flex-start" },
          }}
        >
          {Array.from({ length: 6 }, (_, index) => (
            <input
              key={index}
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
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
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
              color: "#010C24",
              textDecoration: "none",
              fontWeight: 600,
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
            width: { xs: "100%", md: "30%" },
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