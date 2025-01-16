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
import LocalHotelOutlinedIcon from "@mui/icons-material/LocalHotelOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
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
  isPG: Yup.boolean().nullable().required("Please select PG preference"),
  isTeams: Yup.boolean().nullable().required("Please select Teams preference"),
  isPhoneVisible: Yup.boolean().nullable().required("Please select visibility preference"),
  description: Yup.string()
    .required("Description is required")
    .min(20, "Description should be at least 20 characters"),
});
const ErrorMessage = styled("p")({
  color: "#d32f2f",
  fontSize: "0.75rem",
  margin: "4px 0 0 4px",
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'white',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  maxWidth: 1000,
  margin: '24px auto',
  padding: theme.spacing(4),
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
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

const RoomRequirementForm = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/selection');}

  const formik = useFormik({
    initialValues: {
      location: "",
      rent: "",
      lookingFor: "",
      occupancy: "",
      highlights: [],
      isPG: null,
      isTeams: null,
      isPhoneVisible: null,
      description: "",
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
    "Working full time",
    "College student",
    "25+ age",
    "<25 age",
    "Working night shifts",
    "Have 2 wheeler",
    "Have 4 wheeler",
    "Will shift immediately",
    "Have pets",
    "Need no furnishing",
    "Pure vegetarian",
  ];
  return (
    <>
      <StyledAppBar position="sticky">
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: '70px', md: '80px' } }}>
          <Box
            sx={{
              position: { xs: "static", md: "absolute" },
              top: "1rem",
              left: "1rem",
              mb: { xs: 0, md: 0 }
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
          <Box sx={{ ml: 'auto' }}>
            <IconButton 
              onClick={handleClose} 
              sx={{ 
                color: '#082E66',
                '&:hover': {
                  backgroundColor: 'rgba(8, 46, 102, 0.04)'
                }
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </StyledAppBar>
      <Box sx={{ bgcolor: '#fafafa', minHeight: '100vh', pt: 3, pb: 6 }}>
        <StyledPaper elevation={0}>
          <Typography 
            variant="h1" 
            align="center" 
            sx={{ 
              mb: 1, 
              fontWeight: 500,
              fontFamily: 'Poppins',
              fontSize: { xs: '24px', md: '38px' },
              // background: 'linear-gradient(45deg, #082E66, #00A676)',
              // WebkitBackgroundClip: 'text',
              // WebkitTextFillColor: 'transparent',
            }}
          >
            Add your requirement
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
              <FormSection>
                <SectionTitle variant="h6">Basic Details</SectionTitle>
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
                      helperText={showError("location") && formik.errors.location}
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

              <FormSection>
                <SectionTitle variant="h6">Preferences</SectionTitle>
                <Stack spacing={3}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 2, color: "#666" }}>
                      <GroupOutlinedIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                      Looking For *
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      {["Male", "Female", "Any"].map((option) => (
                        <CustomButton
                          key={option}
                          selected={formik.values.lookingFor === option}
                          onClick={() => formik.setFieldValue("lookingFor", option)}
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
                      <BedOutlinedIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                      Occupancy Type *
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      {["Single", "Shared", "Any"].map((option) => (
                        <CustomButton
                          key={option}
                          selected={formik.values.occupancy === option}
                          onClick={() => formik.setFieldValue("occupancy", option)}
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

              <FormSection>
                <SectionTitle variant="h6">Additional Details</SectionTitle>
                <Stack spacing={3}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 2, color: "#666" }}>
                      <LocalHotelOutlinedIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                      PG Preference *
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <CustomButton
                        selected={formik.values.isPG === true}
                        onClick={() => formik.setFieldValue("isPG", true)}
                        sx={{ flex: 1 }}
                      >
                        Yes
                      </CustomButton>
                      <CustomButton
                        selected={formik.values.isPG === false}
                        onClick={() => formik.setFieldValue("isPG", false)}
                        sx={{ flex: 1 }}
                      >
                        No
                      </CustomButton>
                    </Box>
                    {showError("isPG") && (
                      <ErrorMessage>{formik.errors.isPG}</ErrorMessage>
                    )}
                  </Box>

                  <Box>
                    <Typography variant="body2" sx={{ mb: 2, color: "#666" }}>
                      <GroupAddOutlinedIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                      Team Formation *
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <CustomButton
                        selected={formik.values.isTeams === true}
                        onClick={() => formik.setFieldValue("isTeams", true)}
                        sx={{ flex: 1 }}
                      >
                        Yes
                      </CustomButton>
                      <CustomButton
                        selected={formik.values.isTeams === false}
                        onClick={() => formik.setFieldValue("isTeams", false)}
                        sx={{ flex: 1 }}
                      >
                        No
                      </CustomButton>
                    </Box>
                    {showError("isTeams") && (
                      <ErrorMessage>{formik.errors.isTeams}</ErrorMessage>
                    )}
                  </Box>

                  <Box>
                    <Typography variant="body2" sx={{ mb: 2, color: "#666" }}>
                      <PhoneOutlinedIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                      Phone Visibility *
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <CustomButton
                        selected={formik.values.isPhoneVisible === true}
                        onClick={() => formik.setFieldValue("isPhoneVisible", true)}
                        sx={{ flex: 1 }}
                      >
                        Public
                      </CustomButton>
                      <CustomButton
                        selected={formik.values.isPhoneVisible === false}
                        onClick={() => formik.setFieldValue("isPhoneVisible", false)}
                        sx={{ flex: 1 }}
                      >
                        Private
                      </CustomButton>
                    </Box>
                    {showError("isPhoneVisible") && (
                      <ErrorMessage>{formik.errors.isPhoneVisible}</ErrorMessage>
                    )}
                  </Box>
                </Stack>
              </FormSection>

              <FormSection>
                <SectionTitle variant="h6">Highlights *</SectionTitle>
                <Box sx={{ display: "flex", flexWrap: "wrap", margin: "-4px" }}>
                  {highlights.map((highlight) => (
                    <HighlightChip
                      key={highlight}
                      selected={formik.values.highlights.includes(highlight)}
                      onClick={() => {
                        const newHighlights = formik.values.highlights.includes(highlight)
                          ? formik.values.highlights.filter((h) => h !== highlight)
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
                  helperText={showError("description") && formik.errors.description}
                />
              </FormSection>

              <Button
                type="submit"
                variant="contained"
                onClick={() => {
                  // This will trigger validation for all fields
                  formik.handleSubmit();
                  // Touch all fields to show errors
                  Object.keys(formik.values).forEach(key => {
                    formik.setFieldTouched(key, true);
                  });
                }}
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
                Submit Requirement
              </Button>

              <Box sx={{ textAlign: "center" }}>
                <Typography variant="body1" sx={{ color: "#666" }}>
                  Have room & need roommate?{" "}
                  <Button
                    onClick={() => navigate('/add-room')}
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
                    Add Room
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

export default RoomRequirementForm;
