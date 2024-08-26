import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
}));

export default function CreatePlan() {
    const [trialLength, setTrialLength] = useState('');

    const handleChange = (event) => {
        setTrialLength(event.target.value);
    };


    return (
        <Stack spacing={'10px'} sx={{ width: '100%', height: '100vh', p: '10px' }} >
            <Stack height='max-content' width='100%' direction={'row'} spacing={2} >
                <Item sx={{ width: '100%', height: '100%' }} >
                    <Typography >  Create Plan</Typography>
                </Item>

            </Stack>
            <Stack minHeight={'100%'} width='100%' direction={'row'} spacing={2} >
                <Item sx={{ width: '75%', height: '100%' }} >
                    <Box> <Typography> Plan Details</Typography>
                        <Box>Plan Identity</Box>
                        <Box mt='20px' >
                            <TextField id="outlined-basic" label="Plan Name" variant="outlined" />
                            <TextField id="outlined-basic" label="Plan Code" variant="outlined" />
                            <TextField
                                id="outlined-multiline-static"
                                label="Plan Description"
                                multiline
                                rows={4}
                                defaultValue="Default Value"
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Typography> Plan Configuration</Typography>
                        <Box>Free Trial Details</Box>
                        <Box mt='20px' >
                            <Typography> Trial Length</Typography>
                            <FormControl>
                                {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="No Trial" />
                                    <FormControlLabel value="male" control={<Radio />} label="7 days" />
                                    <FormControlLabel value="other" control={<Radio />} label="14 days" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Box mt='20px' >
                            <Typography>Pricing Model</Typography>
                            <Stack>
                                <FormControl>
                                    {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Fixed" />
                                        <FormControlLabel value="male" control={<Radio />} label="Ramp" />
                                    </RadioGroup>
                                </FormControl>
                                <TextField id="outlined-basic" label="Price per billing period in INR" variant="outlined" />
                            </Stack>

                        </Box>
                    </Box>
                </Item>
                <Item sx={{ width: '25%', height: '100%' }} >Item 2</Item>
            </Stack>
        </Stack>
    );
}
