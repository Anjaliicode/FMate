import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  Paper,
  TextField,
  InputAdornment,
  AppBar,
  Toolbar,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import WifiIcon from "@mui/icons-material/Wifi";
import KitchenIcon from "@mui/icons-material/Kitchen";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import TvIcon from "@mui/icons-material/Tv";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

const validationSchema = Yup.object().shape({
  location: Yup.string().required("Location is required"),
  rent: Yup.number()
    .typeError("Please enter a valid amount")
    .required("Rent amount is required")
    .positive("Rent must be greater than 0"),
  lookingFor: Yup.string().required("Please select who you are looking for"),
  occupancy: Yup.string().required("Please select occupancy type"),
  highlights: Yup.array().min(1, "Please select at least one highlight"),
  isPhoneVisible: Yup.boolean()
    .nullable()
    .required("Please select visibility preference"),
  description: Yup.string()
    .required("Description is required")
    .min(20, "Description should be at least 20 characters"),
  amenities: Yup.array().min(1, "Please select at least one amenity"),
  photos: Yup.array().min(1, "Please upload at least one photo"),
});

const ErrorMessage = styled("p")({
  color: "#d32f2f",
  fontSize: "0.75rem",
  margin: "4px 0 0 4px",
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: "white",
  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  maxWidth: 1000,
  margin: "24px auto",
  padding: theme.spacing(4),
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
}));

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    transition: "all 0.3s ease",
    "& fieldset": {
      border: "1px solid #E0E0E0",
    },
    "&:hover fieldset": {
      borderColor: "#00A676",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00A676",
      borderWidth: "1px",
    },
  },
  "& .MuiInputAdornment-root": {
    color: "#00A676",
  },
});

const CustomButton = styled(Button)(({ selected }) => ({
  backgroundColor: selected ? "#00A676" : "#FFFFFF",
  color: selected ? "white" : "#666",
  borderRadius: "12px",
  textTransform: "none",
  padding: "10px 20px",
  border: selected ? "none" : "1px solid #E0E0E0",
  boxShadow: selected ? "0 2px 8px rgba(0,166,118,0.2)" : "none",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: selected ? "#009668" : "#F8F8F8",
    border: selected ? "none" : "1px solid #00A676",
  },
}));

const HighlightChip = styled(Button)(({ selected }) => ({
  backgroundColor: selected ? "#00A676" : "#FFFFFF",
  color: selected ? "white" : "#666",
  borderRadius: "24px",
  textTransform: "none",
  padding: "8px 16px",
  margin: "4px",
  border: selected ? "none" : "1px solid #E0E0E0",
  boxShadow: selected ? "0 2px 8px rgba(0,166,118,0.2)" : "none",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: selected ? "#009668" : "#F8F8F8",
    border: selected ? "none" : "1px solid #00A676",
  },
}));

const SectionTitle = styled(Typography)({
  fontWeight: 600,
  color: "#333",
  marginBottom: "8px",
});

const FormSection = styled(Box)({
  padding: "24px",
  backgroundColor: "#FAFAFA",
  borderRadius: "12px",
  marginBottom: "24px",
});

const RoomDetailsForm = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/selection");
  };

  const formik = useFormik({
    initialValues: {
      location: "",
      rent: "",
      lookingFor: "",
      occupancy: "",
      highlights: [],
      isPhoneVisible: null,
      description: "",
      amenities: [],
      photos: [],
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  const showError = (fieldName) => {
    return formik.touched[fieldName] && formik.errors[fieldName];
  };

  const highlights = [
    "Attached washroom",
    "Market nearby",
    "Attached balcony",
    "Close to metro station",
    "Public transport nearby",
    "Gated society",
    "No landlord",
    "Newly built",
    "Separate washroom",
    "House keeping",
    "24/7 water",
    "Park nearby",
  ];

  const amenities = [
    { icon: <TvIcon />, label: "TV" },
    { icon: <KitchenIcon />, label: "Fridge" },
    { icon: <LocalDiningIcon />, label: "Kitchen" },
    { icon: <WifiIcon />, label: "Wifi" },
    { icon: <LocalLaundryServiceIcon />, label: "Machine" },
    { icon: <AcUnitIcon />, label: "AC" },
    { icon: <LocalLaundryServiceIcon />, label: "PowerBackup" },
    { icon: <LocalDiningIcon />, label: "Cook" },
    { icon: <DirectionsBikeIcon />, label: "Parking" },
  ];

  const handlePhotoUpload = (event) => {
    const files = Array.from(event.target.files);
    formik.setFieldValue("photos", files);
  };

  return (
    <>
      <StyledAppBar position="sticky">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: { xs: "70px", md: "80px" },
          }}
        >
          <Box
            sx={{
              position: { xs: "static", md: "absolute" },
              top: "1rem",
              left: "1rem",
              mb: { xs: 0, md: 0 },
            }}
          >
            <a href="/" style={{ textDecoration: "none" }}>
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
            </a>
          </Box>
          <Box sx={{ ml: "auto" }}>
            <IconButton
              onClick={handleClose}
              sx={{
                color: "#082E66",
                "&:hover": {
                  backgroundColor: "rgba(8, 46, 102, 0.04)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </StyledAppBar>
      <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh", pt: 3, pb: 6 }}>
        <StyledPaper elevation={0}>
          <Typography
            variant="h1"
            align="center"
            sx={{
              mb: 1,
              fontWeight: 600,
              fontFamily: "Poppins",
              fontSize: { xs: "24px", md: "38px" },
            }}
          >
            Add your room details
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            so that other users can contact you
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
              {/* Basic Details Section */}
              <FormSection>
                <SectionTitle variant="h6" fontWeight="500">
                  Basic Details
                </SectionTitle>
                <Stack spacing={3}>
                  <Box>
                    <CustomTextField
                      fullWidth
                      placeholder="Add location"
                      name="location"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationOnOutlinedIcon />
                          </InputAdornment>
                        ),
                      }}
                      {...formik.getFieldProps("location")}
                      error={showError("location")}
                      helperText={
                        showError("location") && formik.errors.location
                      }
                    />
                  </Box>

                  <Box>
                    <CustomTextField
                      fullWidth
                      placeholder="5000"
                      name="rent"
                      type="number"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CurrencyRupeeIcon />
                          </InputAdornment>
                        ),
                      }}
                      {...formik.getFieldProps("rent")}
                      error={showError("rent")}
                      helperText={showError("rent") && formik.errors.rent}
                    />
                  </Box>
                </Stack>
              </FormSection>

              {/* Preferences Section */}

              <FormSection>
                <SectionTitle variant="h6">Preferences</SectionTitle>
                <Stack spacing={3}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 2, color: "#666" }}>
                      <GroupOutlinedIcon
                        sx={{ mr: 1, verticalAlign: "middle" }}
                      />
                      Looking For *
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      {["Male", "Female", "Any"].map((option) => (
                        <CustomButton
                          key={option}
                          selected={formik.values.lookingFor === option}
                          onClick={() =>
                            formik.setFieldValue("lookingFor", option)
                          }
                          sx={{ flex: 1 }}
                        >
                          {option}
                        </CustomButton>
                      ))}
                    </Box>
                    {showError("lookingFor") && (
                      <ErrorMessage>{formik.errors.lookingFor}</ErrorMessage>
                    )}
                  </Box>

                  <Box>
                    <Typography variant="body2" sx={{ mb: 2, color: "#666" }}>
                      <BedOutlinedIcon
                        sx={{ mr: 1, verticalAlign: "middle" }}
                      />
                      Occupancy Type *
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      {["Single", "Shared", "Any"].map((option) => (
                        <CustomButton
                          key={option}
                          selected={formik.values.occupancy === option}
                          onClick={() =>
                            formik.setFieldValue("occupancy", option)
                          }
                          sx={{ flex: 1 }}
                        >
                          {option}
                        </CustomButton>
                      ))}
                    </Box>
                    {showError("occupancy") && (
                      <ErrorMessage>{formik.errors.occupancy}</ErrorMessage>
                    )}
                  </Box>
                </Stack>
              </FormSection>

              {/* Photo Upload Section */}
              <FormSection>
                <SectionTitle variant="h6">
                  Upload 3 Photos of your room *
                </SectionTitle>
                <Box
                  sx={{
                    border: "2px dashed #E0E0E0",
                    borderRadius: "12px",
                    p: 6,
                    textAlign: "center",
                  }}
                >
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    style={{ display: "none" }}
                    id="photo-upload"
                  />
                  <label htmlFor="photo-upload">
                    <Button
                      component="span"
                      variant="outlined"
                      sx={{
                        color: "#00A676",
                        borderColor: "#00A676",
                        "&:hover": { borderColor: "#009668" },
                      }}
                    >
                      Click or drag images to upload
                    </Button>
                  </label>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    Max file size: 20 MB
                  </Typography>
                </Box>
                {showError("photos") && (
                  <ErrorMessage>{formik.errors.photos}</ErrorMessage>
                )}
              </FormSection>
              {/* Amenities Section */}

              <FormSection>
                <SectionTitle variant="h6">
                  Choose Highlights for your room*
                </SectionTitle>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                  {amenities.map((amenity) => (
                    <CustomButton
                      key={amenity.label}
                      selected={formik.values.amenities.includes(amenity.label)}
                      onClick={() => {
                        const newAmenities = formik.values.amenities.includes(
                          amenity.label
                        )
                          ? formik.values.amenities.filter(
                              (a) => a !== amenity.label
                            )
                          : [...formik.values.amenities, amenity.label];
                        formik.setFieldValue("amenities", newAmenities);
                      }}
                      startIcon={amenity.icon}
                    >
                      {amenity.label}
                    </CustomButton>
                  ))}
                </Box>
                {showError("amenities") && (
                  <ErrorMessage>{formik.errors.amenities}</ErrorMessage>
                )}
              </FormSection>

              {/* Highlights Section */}
              <FormSection>
                <SectionTitle variant="h6">
                  Choose Highlights for your room *
                </SectionTitle>
                <Box sx={{ display: "flex", flexWrap: "wrap", margin: "-4px" }}>
                  {highlights.map((highlight) => (
                    <HighlightChip
                      key={highlight}
                      selected={formik.values.highlights.includes(highlight)}
                      onClick={() => {
                        const newHighlights = formik.values.highlights.includes(
                          highlight
                        )
                          ? formik.values.highlights.filter(
                              (h) => h !== highlight
                            )
                          : [...formik.values.highlights, highlight];
                        formik.setFieldValue("highlights", newHighlights);
                      }}
                    >
                      {highlight}
                    </HighlightChip>
                  ))}
                </Box>
                {showError("highlights") && (
                  <ErrorMessage>{formik.errors.highlights}</ErrorMessage>
                )}
              </FormSection>

              {/* Contact Number Details   */}
              <FormSection>
                <SectionTitle variant="h6">Additional Details</SectionTitle>
                <Stack spacing={3}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 2, color: "#666" }}>
                      <PhoneOutlinedIcon
                        sx={{ mr: 1, verticalAlign: "middle" }}
                      />
                      Do you want to make your mobile visible to other users? *
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <CustomButton
                        selected={formik.values.isPhoneVisible === true}
                        onClick={() =>
                          formik.setFieldValue("isPhoneVisible", true)
                        }
                        sx={{ flex: 1 }}
                      >
                        Yes! make it Public
                      </CustomButton>
                      <CustomButton
                        selected={formik.values.isPhoneVisible === false}
                        onClick={() =>
                          formik.setFieldValue("isPhoneVisible", false)
                        }
                        sx={{ flex: 1 }}
                      >
                        No! make it Private
                      </CustomButton>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 2, color: "#666" }}>
                      NOTE: if ypur phone is private,others can contact you only
                      through chat*
                    </Typography>
                    {showError("isPhoneVisible") && (
                      <ErrorMessage>
                        {formik.errors.isPhoneVisible}
                      </ErrorMessage>
                    )}
                  </Box>
                </Stack>
              </FormSection>
              {/* Description section */}

              <FormSection>
                <SectionTitle variant="h6">Description *</SectionTitle>
                <CustomTextField
                  fullWidth
                  placeholder="I am looking for a room with roommate."
                  name="description"
                  multiline
                  rows={4}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DescriptionOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  {...formik.getFieldProps("description")}
                  error={showError("description")}
                  helperText={
                    showError("description") && formik.errors.description
                  }
                />
              </FormSection>

              {/* Submit Button Section */}

              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "#00A676",
                  "&:hover": { bgcolor: "#009668" },
                  borderRadius: "12px",
                  textTransform: "none",
                  py: 2,
                  fontSize: "1.1rem",
                  boxShadow: "0 4px 12px rgba(0,166,118,0.2)",
                }}
              >
                Submit Room Details
              </Button>

              <Box sx={{ textAlign: "center" }}>
                <Typography variant="body1" sx={{ color: "#666" }}>
                  Looking for a room?{" "}
                  <Button
                    onClick={() => navigate("/roomrequirements")}
                    sx={{
                      color: "#00A676",
                      textTransform: "none",
                      p: 0,
                      minWidth: "auto",
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor: "transparent",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Add Requirement
                  </Button>
                </Typography>
              </Box>
            </Stack>
          </form>
        </StyledPaper>
      </Box>
    </>
  );
};

export default RoomDetailsForm;
