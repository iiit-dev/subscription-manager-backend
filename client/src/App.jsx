// import React from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import SignIn from '../Components/SignIn';
// import Welcome from '../Components/Welcome';
// import SignUp from '../Components/SignUp';
// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/sign-up" element={<SignUp />} />
//                 <Route path="/" element={<SignIn />} />
//                 <Route path="/welcome" element={<Welcome />} />
//             </Routes>
//         </BrowserRouter>

//     );
// }

// export default App;
import React from 'react'
import { Box, Stack } from '@mui/material';

const App = () => {
    return (
        <Stack >
            <Box sx={{ display: 'inline' }} border={'1px solid red'}  >
                Phosfluorescently engineer 24/7 methods of empowerment whereas adaptive expertise. Compellingly leverage existing mission-critical quality vectors without proactive web-readiness. Professionally empower professional systems through performance based markets. Conveniently seize adaptive scenarios without dynamic niches. Phosfluorescently re-engineer compelling schemas vis-a-vis cooperative interfaces.
            </Box>
            <Box sx={{ display: 'inline' }} border={'1px solid red'}  >
                Phosfluorescently engineer 24/7 methods of empowerment whereas adaptive expertise. Compellingly leverage existing mission-critical quality vectors without proactive web-readiness. Professionally empower professional systems through performance based markets. Conveniently seize adaptive scenarios without dynamic niches. Phosfluorescently re-engineer compelling schemas vis-a-vis cooperative interfaces.
            </Box>
        </Stack>

        // <Box sx={{
        //     display: 'flex',
        //     '& > .child': {
        //         flexBasis: '100%'
        //     },
        // }}>
        //     <Box p={2} border={'1px solid red'} className="child" ></Box>
        //     <Box p={2} border={'1px solid red'} className="child" ></Box>
        //     <Box p={2} border={'1px solid red'} className="child" ></Box>
        //     <Box p={2} border={'1px solid red'} className="child" ></Box>

        // </Box>
        // <Box sx={{
        //     display: 'flex',
        //     flexWrap: 'wrap',
        //     '& > .child': {
        //         flex: '1 1 33.33%'
        //     },
        // }}>
        //     <Box p={2} border={'1px solid red'} className="child" ></Box>
        //     <Box p={2} border={'1px solid red'} className="child" ></Box>
        //     <Box p={2} border={'1px solid red'} className="child" ></Box>
        //     <Box p={2} border={'1px solid red'} className="child" ></Box>
        //     <Box p={2} border={'1px solid red'} className="child" ></Box>
        // </Box>
    )

}

export default App
