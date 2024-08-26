import React, { useState } from 'react';
import { AppBar, Stack, Toolbar, Typography, Box, CssBaseline } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const drawerWidth = '221px';
const useStyles = makeStyles({
  appBar: {
    padding: '0 !important',  // Override with !important
  },
});

const theme = createTheme();

function Layout() {
  const classes = useStyles();

  const imgUrl = 'https://recurly.com/img2/brand/wordmark-1@2x.png'
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex' }}  >
      <CssBaseline />
      <AppBar className={classes.appBar} position="fixed" sx={{     padding: 0 , zIndex: theme => theme.zIndex.drawer - 1 }}>
        <Toolbar>
          <Typography fontSize={'14px'} color={'white'}  ml={drawerWidth} variant="h6" noWrap component="div">
          Home >> Plans >> New Plan          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{   
          width: drawerWidth,
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          bgcolor: 'background.paper',
          boxShadow: theme => theme.shadows[3],
          zIndex: theme => theme.zIndex.drawer,
        }}
      >
        <Toolbar height='32px' width='32px' sx={{ background: `url(${imgUrl} center/cover no-repeat)` }} />
        <Box sx={{ padding: 2 }}>
          <Typography variant="h6">Left Sidebar</Typography>
        </Box>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          marginLeft: drawerWidth,
          marginRight: '275px',
        }}
      >
        <Toolbar />
        <Toolbar sx={{ borderBottom: '1px solid #e8e8e8;', height: '81px' }} >
          <Typography variant='h5' fontWeight={550} >
            Create Plan
          </Typography>
        </Toolbar>
        <Box my={'10px'} mx={'22px'} >
          <Typography variant='h6'  >
            Plan Details
          </Typography>
          <Stack borderRadius={'5px'} mt={'10px'} height='360px' width='665px' border='1px solid #D7D7D9' >
            <Stack height='20%' width='100%' borderBottom='1px solid #D7D7D9' >
              <Typography variant='body1' fontWeight={'600'} display={'flex'} alignItems={'center'} mx={'15px'} height={'100%'}  >
                Plan Identity
              </Typography>
            </Stack>
            <Stack justifyContent={'space-evenly'} alignItems={'center'} direction={'row'} height='40%' width='100%' borderBottom='1px solid #D7D7D9' >
              <Stack width={'45%'} >
                <FormLabel sx={{ fontSize: '12px', textTransform: 'uppercase' }} id="demo-radio-buttons-group-label">Plan Name</FormLabel>
                <TextField id="outlined-basic" variant="outlined" />
              </Stack>
              <Stack width={'45%'}>
                <FormLabel sx={{ fontSize: '12px', textTransform: 'uppercase' }} id="demo-radio-buttons-group-label">Plan code</FormLabel>
                <TextField id="outlined-basic" variant="outlined" />
              </Stack>
            </Stack>
            <Stack height='60%' justifyContent={'center'} width='100%'  >
              <Stack ml={'22px'} mb={'22px'}  height='65%' width='60%'>
              <FormLabel sx={{ fontSize: '12px', textTransform: 'uppercase' }} id="demo-radio-buttons-group-label">Plan Description</FormLabel>

              <TextField
            
                id="outlined-multiline-static"
                multiline
                rows={4}
              />
              </Stack>
            </Stack>

          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          width: '275px',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          bgcolor: 'background.paper',
          boxShadow: theme => theme.shadows[3],
          padding: 2,
        }}
      >
        {/* Right bar content here */}
        <Toolbar />
        <Box variant="h6">Right Bar</Box>
      </Box>
    </Box>
    </ThemeProvider>
  );
}

export default Layout;
