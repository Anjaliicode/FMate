import React from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import email from "../assets/email.png";
import { useNavigate } from "react-router-dom";

const EmailVerificationPage = () => {
  const navigate = useNavigate();
  function verifyhandle() {
    navigate("/verificationcode");
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
            flex: { xs: 1, md: 1 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: { xs: "100%", md: "500px" },
            px: { xs: 4, md: 8 },
            py: 4,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: { xs: "24px", md: "32px" },
                lineHeight: 1.2,
                mb: 1,
                color: "#000000",
              }}
            >
              Enter College Email
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: 1.5,
                color: "#666666",
                mb: 4,
              }}
            >
              We'll send you a 6 digit verification code to verify your college email
            </Typography>

            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your college email"
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  "& fieldset": {
                    borderColor: "#E5E7EB",
                  },
                  "&:hover fieldset": {
                    borderColor: "#E5E7EB",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  padding: "12px 16px",
                  fontFamily: "Poppins",
                },
              }}
            />

            <Button
              variant="contained"
              fullWidth
              onClick={verifyhandle}
              sx={{
                backgroundColor: "#0A0A23",
                color: "#fff",
                borderRadius: "8px",
                py: 1.5,
                textTransform: "none",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "#2A2A43",
                },
                mb: 4,
              }}
            >
              Verify Now
            </Button>

            {/* Bottom text with link */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                borderTop: "1px solid #E5E7EB",
                pt: 3,
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
                Contact Us
              </Link>
            </Box>
          </Box>
        </Box>
        </Box>
    // <Box
    //   sx={{
    //     minHeight: "100vh",
    //     display: "flex",
    //     flexDirection: "column",
    //     backgroundColor: "#ffffff",
    //   }}
    // >
    //   {/* Top Navigation Bar */}
    //   <Box
    //     sx={{
    //       display: "flex",
    //       justifyContent: "space-between",
    //       alignItems: "center",
    //       px: { xs: 2, md: 4 },
    //       py: 2,
    //       borderBottom: "1px solid #E5E7EB",
    //     }}
    //   >
    //     <Typography
    //       variant="h6"
    //       sx={{
    //         fontFamily: "Poppins",
    //         fontWeight: 500,
    //         fontSize: "24px",
    //         color: "#082E66",
    //       }}
    //     >
    //       FMate
    //     </Typography>
    //   </Box>

    //   {/* Main Content */}
    //   <Box
    //     sx={{
    //       flex: 1,
    //       display: "flex",
    //       overflow: "hidden",
    //     }}
    //   >
    //     {/* Left Section with Image */}
    //     <Box
    //       sx={{
    //         flex: 1,
    //         display: { xs: "none", md: "flex" },
    //         alignItems: "center",
    //         justifyContent: "center",
    //         p: 4,
    //       }}
    //     >
    //       <img
    //         src={email}
    //         alt="Students waving"
    //         style={{
    //           width: "100%",
    //           maxWidth: "500px",
    //           height: "auto",
    //           objectFit: "contain",
    //         }}
    //       />
    //     </Box>

    //     {/* Right Section with Form */}
    //     <Box
    //       sx={{
    //         flex: { xs: 1, md: 1 },
    //         display: "flex",
    //         flexDirection: "column",
    //         justifyContent: "center",
    //         maxWidth: { xs: "100%", md: "500px" },
    //         px: { xs: 4, md: 8 },
    //         py: 4,
    //       }}
    //     >
    //       <Box>
    //         <Typography
    //           variant="h4"
    //           sx={{
    //             fontFamily: "Poppins",
    //             fontWeight: 500,
    //             fontSize: { xs: "24px", md: "32px" },
    //             lineHeight: 1.2,
    //             mb: 1,
    //             color: "#000000",
    //           }}
    //         >
    //           Enter College Email
    //         </Typography>

    //         <Typography
    //           sx={{
    //             fontFamily: "Poppins",
    //             fontWeight: 400,
    //             fontSize: "14px",
    //             lineHeight: 1.5,
    //             color: "#666666",
    //             mb: 4,
    //           }}
    //         >
    //           We'll send you a 6 digit verification code to verify your college email
    //         </Typography>

    //         <TextField
    //           fullWidth
    //           variant="outlined"
    //           placeholder="Enter your college email"
    //           sx={{
    //             mb: 3,
    //             "& .MuiOutlinedInput-root": {
    //               borderRadius: "8px",
    //               backgroundColor: "#fff",
    //               "& fieldset": {
    //                 borderColor: "#E5E7EB",
    //               },
    //               "&:hover fieldset": {
    //                 borderColor: "#E5E7EB",
    //               },
    //             },
    //             "& .MuiOutlinedInput-input": {
    //               padding: "12px 16px",
    //               fontFamily: "Poppins",
    //             },
    //           }}
    //         />

    //         <Button
    //           variant="contained"
    //           fullWidth
    //           onClick={verifyhandle}
    //           sx={{
    //             backgroundColor: "#0A0A23",
    //             color: "#fff",
    //             borderRadius: "8px",
    //             py: 1.5,
    //             textTransform: "none",
    //             fontFamily: "Poppins",
    //             fontWeight: 500,
    //             fontSize: "16px",
    //             "&:hover": {
    //               backgroundColor: "#2A2A43",
    //             },
    //             mb: 4,
    //           }}
    //         >
    //           Verify Now
    //         </Button>

    //         {/* Bottom text with link */}
    //         <Box
    //           sx={{
    //             display: "flex",
    //             alignItems: "center",
    //             justifyContent: "center",
    //             gap: 1,
    //             borderTop: "1px solid #E5E7EB",
    //             pt: 3,
    //           }}
    //         >
    //           <Typography
    //             sx={{
    //               fontFamily: "Poppins",
    //               fontSize: "14px",
    //               color: "#666666",
    //             }}
    //           >
    //             Don't have a college email?
    //           </Typography>
    //           <Link
    //             href="#"
    //             sx={{
    //               fontFamily: "Poppins",
    //               fontSize: "14px",
    //               color: "#082E66",
    //               textDecoration: "none",
    //               fontWeight: 500,
    //               "&:hover": {
    //                 textDecoration: "underline",
    //               },
    //             }}
    //           >
    //             Contact Us
    //           </Link>
    //         </Box>
    //       </Box>
    //     </Box>
    //   </Box>
    // </Box>
  );
};

export default EmailVerificationPage;