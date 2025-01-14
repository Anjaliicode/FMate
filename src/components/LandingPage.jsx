import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import hero from "../assets/homepage.png";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  function emailhandle() {
    navigate("/emailverification");
  }
  return (
    <Box component="main">
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: { xs: "auto", md: "100vh" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: { xs: "1rem", md: "2rem" },
          position: "relative",
        }}
      >
        <Box 
          sx={{ 
            position: { xs: "static", md: "absolute" }, 
            top: "1rem", 
            left: "1rem",
            mb: { xs: 2, md: 0 }
          }}
        >
          <Typography
            variant="h6"
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
        </Box>

        <Box 
          sx={{ 
            position: { xs: "static", md: "absolute" }, 
            top: "1rem", 
            right: "1rem",
            mb: { xs: 3, md: 0 }
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0A0A23",
              borderRadius: "20px",
              padding: { xs: "8px 16px", md: "10px 20px" },
              "&:hover": { backgroundColor: "#2A2A43" },
            }}
            onClick={emailhandle}
          >
            Join the community
          </Button>
        </Box>

        <Box sx={{ 
          maxWidth: "1200px", 
          mt: { xs: 4, md: 18 },
          px: { xs: 2, md: 4 }
        }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 400,
              fontFamily: "poppins",
              px: { xs: 0, md: 28 },
              lineHeight: { xs: "56px", md: "104px" },
              fontSize: { xs: "2.5rem", md: "4.5rem" },
            }}
          >
            Find your ideal flatmates
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontWeight: 205,
              fontSize: { xs: "16px", md: "19px" },
              color: "rgb(105, 103, 103)",
              px: { xs: 2, md: 0 },
            }}
          >
            Connecting students from universities across India for a seamless
            flat-sharing experience
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, md: 2 }}
            justifyContent="center"
            py={{ xs: 4, md: 8 }}
          >
            <Button
              variant="contained"
              sx={{
                borderRadius: "30px",
                background: "#164DCD",
                p: ".5rem 1rem",
                width: { xs: "100%", sm: "auto" },
                "&:hover": { backgroundColor: "#1142AB" },
              }}
            >
              Browse Listings
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0A0A23",
                borderRadius: "30px",
                p: ".5rem 1rem",
                width: { xs: "100%", sm: "auto" },
                "&:hover": { backgroundColor: "#2A2A43" },
              }}
            >
              Post a Requirement
            </Button>
          </Stack>
          <Box sx={{ mt: 4 }}>
            <img
              src={hero}
              alt="Students illustration"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      </Box>

      {/* How it Works Section */}
      <Box
        sx={{
          padding: { xs: "2rem 1rem", md: "0.5rem 4rem 2rem 4rem" },
          backgroundColor: "#ffffff",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: { xs: "36px", md: "64px" },
            lineHeight: { xs: "48px", md: "96px" },
            pt: "2rem",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          How it works
        </Typography>

        <Box
          direction="column"
          spacing={2}
          sx={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {/* Step 1 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              mb: { xs: 6, md: 4 },
            }}
          >
            <Box sx={{ 
              flex: 1, 
              pr: { xs: 0, md: 24 }, 
              pl: { xs: 2, md: 10 },
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 4, md: 0 }
            }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: { xs: "24px", md: "39px" },
                  lineHeight: { xs: "36px", md: "54px" },
                  mb: 1,
                }}
              >
                Step 1: Sign Up with Your University Email
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 275,
                  fontSize: { xs: "16px", md: "22px" },
                  lineHeight: { xs: "24px", md: "30px" },
                  color: "text.secondary",
                }}
              >
                Register using your university email address for verification
                and secure access to our platform
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                height: { xs: "250px", md: "350px" },
                width: "100%",
                textAlign: "center",
                overflow: "hidden",
                px: { xs: 2, md: 0 }
              }}
            >
              <img
                src={work1}
                alt="Sign up illustration"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>

          {/* Step 2 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row-reverse" },
              alignItems: "center",
              gap: { xs: 4, md: 8 },
              mb: { xs: 6, md: 4 }
            }}
          >
            <Box sx={{ 
              flex: 1,
              textAlign: { xs: "center", md: "left" },
              px: { xs: 2, md: 0 }
            }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: { xs: "24px", md: "36px" },
                  lineHeight: { xs: "36px", md: "54px" },
                  mb: 1,
                }}
              >
                Step 2: Post Your Requirement or Search
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 275,
                  fontSize: { xs: "16px", md: "20px" },
                  lineHeight: { xs: "24px", md: "30px" },
                  color: "text.secondary",
                }}
              >
                Post your flatmate requirements or browse through listings to
                find the perfect match
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                textAlign: "center",
                overflow: "hidden",
                height: { xs: "250px", md: "350px" },
                pr: { xs: 0, md: 18 }
              }}
            >
              <img
                src={work2}
                alt="Search illustration"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>

          {/* Step 3 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 4, md: 4 },
              mb: { xs: 4, md: 0 }
            }}
          >
            <Box sx={{ 
              flex: 1, 
              pr: { xs: 0, md: 20 }, 
              pl: { xs: 2, md: 10 },
              textAlign: { xs: "center", md: "left" }
            }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: { xs: "24px", md: "39px" },
                  lineHeight: { xs: "36px", md: "54px" },
                  mb: 1,
                }}
              >
                Step 3: Connect with Verified Users
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 275,
                  fontSize: { xs: "16px", md: "22px" },
                  lineHeight: { xs: "24px", md: "30px" },
                  color: "text.secondary",
                }}
              >
                Find your ideal flatmate or flat - connecting with people you
                can trust
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                textAlign: "center",
                overflow: "hidden",
                height: { xs: "250px", md: "350px" },
                px: { xs: 2, md: 0 }
              }}
            >
              <img
                src={work3}
                alt="Connect illustration"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;