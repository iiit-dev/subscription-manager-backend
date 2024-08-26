import React, { useState } from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
} from '@mui/material';
// --legacy-peer-deps
import axios from 'axios'
function SignUp() {
  const [formValues, setFormValues] = useState({
    companyName: '',
    address: {
      street: '',
      city: '',
      state: '',
      country: '',
      postalCode: '',
    },
    contactPerson: {
      name: '',
      email: '',
      password: '',
      phone: '',
    },
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormValues((prevValues) => ({
        ...prevValues,
        [parent]: {
          ...prevValues[parent],
          [child]: value,
        },
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        'http://localhost:8000/api/auth/register',
        formValues,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    }
    catch (err) {
      if (err.response) {
        console.error('Registration failed:', err.response.data.message);
      }
      else {
        console.error('Error Occurred', err)
      }
    }
  }
  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await axios.post('http://localhost:8000/api/auth/register',
  //       formValues,
  //       { headers: { 'Content-Type': 'application/json' } });

  //     console.log('Registration successful:', response.data);
  //   } catch (error) {
  //     if (error.response) {
  //       console.error('Registration failed:', error.response.data);
  //     } else {
  //       console.error('Error occurred:', error.message);
  //     }
  //   }
  // };

  return (
    <Box height={'100vh'} sx={{ display: 'grid', placeItems: 'center' }}>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Grid padding={'10px'} container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleInputChange}
                required
                fullWidth
                name="contactPerson.email"
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                placeholder="Email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                onChange={handleInputChange}
                name="contactPerson.password"
                id="password"
                label="Password"
                fullWidth
                type="password"
                variant="outlined"
                placeholder="Password"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                onChange={handleInputChange}
                name="contactPerson.name"
                id="fullName"
                label="Full Name"
                variant="outlined"
                placeholder="John Doe"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="companyName"
                id="companyName"
                label="Company Name"
                variant="outlined"
                placeholder="Snaptags"
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                onChange={handleInputChange}
                name="address.street"
                id="street"
                label="Street"
                variant="outlined"
                placeholder="54394 Golf View Plaza"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                onChange={handleInputChange}
                name="address.postalCode"
                id="postalCode"
                label="Postal Code"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="country-label">Country</InputLabel>
                <Select
                  name="address.country"
                  labelId="country-label"
                  id="country"
                  label="Country"
                  defaultValue=""
                  onChange={handleInputChange}
                >
                  <MenuItem value=""><em>Choose...</em></MenuItem>
                  <MenuItem value="United States">United States</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="country-label">State</InputLabel>
                <Select
                  name="address.state"
                  labelId="state-label"
                  id="state"
                  label="State"
                  defaultValue=""
                  onChange={handleInputChange}
                >
                  <MenuItem value=""><em>Choose...</em></MenuItem>
                  <MenuItem value="Georgia">Georgia</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="city-label">City</InputLabel>
                <Select
                  name="address.city"
                  labelId="city-label"
                  id="city"
                  label="City"
                  defaultValue=""
                  onChange={handleInputChange}
                >
                  <MenuItem value=""><em>Choose...</em></MenuItem>
                  <MenuItem value="Atlanta">Atlanta</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Sign up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
}

export default SignUp;
