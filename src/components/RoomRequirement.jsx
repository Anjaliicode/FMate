import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Stack,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  FormControlLabel,
  Switch,
  Paper
} from '@mui/material';

const RoomRequirementForm = () => {
  
 


  const handleSubmit = () => {
  
    console.log('Form submitted');
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 800, mx: 'auto', mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Add your requirement
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        so that other users can contact you.
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {/* Location */}
          <TextField
            fullWidth
            label="Add Location"
            placeholder="Add Location..."
            variant="outlined"
          />

          {/* Approx Rent */}
          <TextField
            fullWidth
            label="Approx Rent"
            placeholder="5000"
            variant="outlined"
          />

          {/* Looking For */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Looking For
            </Typography>
            <ToggleButtonGroup
             
              sx={{ mb: 2 }}
            >
              <ToggleButton value="male">Male</ToggleButton>
              <ToggleButton value="female">Female</ToggleButton>
              <ToggleButton value="any">Any</ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {/* Occupancy */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Occupancy
            </Typography>
            <ToggleButtonGroup
            
              sx={{ mb: 2 }}
            >
              <ToggleButton value="single">Single</ToggleButton>
              <ToggleButton value="shared">Shared</ToggleButton>
              <ToggleButton value="any">Any</ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {/* Highlights */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Choose Highlights for your property
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
             
            
              
            </Box>
          </Box>

          {/* PG and Teamup Options */}
          <Stack direction="row" spacing={4}>
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Are you interested in PG bed?
              </Typography>
              <ToggleButtonGroup
                
              >
                <ToggleButton value="yes">Yes</ToggleButton>
                <ToggleButton value="no">No</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Are you interested in making Teamup?
              </Typography>
              <ToggleButtonGroup
               
              >
                <ToggleButton value="yes">Yes</ToggleButton>
                <ToggleButton value="no">No</ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Stack>

          {/* Mobile Visibility */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Do you want to make your mobile visible to other users?
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
               
                color="primary"
              >
                Yes! make it public
              </Button>
              <Button
             
                color="primary"
              >
                No! make it private
              </Button>
            </Stack>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
              NOTE: If your phone is private, others can contact you only through chat.
            </Typography>
          </Box>

          {/* Description */}
          <TextField
            fullWidth
            label="Description"
            multiline
          
            placeholder="I am looking for a room with roommate"
            variant="outlined"
          />

          {/* Submit Button */}
          <Button type="submit" variant="contained" color="primary" size="large">
            Submit
          </Button>

          {/* Add Room Link */}
          <Typography variant="body2" align="center">
            Have room & need roommate? 
            <Button color="primary">
              Add Room
            </Button>
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
};

export default RoomRequirementForm;