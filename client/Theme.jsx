// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  zIndex: {
    appBar: 1200, // Adjust this value as needed
    sidebar: 1300, // Ensure this is higher than appBar
    rightBar: 1300, // Ensure this is higher than appBar
  },
});

export default theme;
