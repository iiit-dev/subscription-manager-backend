import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Welcome() {
    const location = useLocation();
    const { message } = location.state || {};

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Welcome
                </Typography>
                {message && (
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        {message}
                    </Typography>
                )}
            </Box>
        </Container>
    );
}
