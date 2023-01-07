import { CssBaseline,Box } from '@mui/material'
import React from 'react'
import HeroComponent from '../components/hero_section/HeroComponent';

const LandingPage = () => {
  return (
    <>
      <CssBaseline />
      <Box maxWidth="xl" sx={{ bgcolor: "#54bc31",width: "100%", display: "flex", flexDirection: "column" }}>
       <HeroComponent/>
      </Box>
    </>
  );
}

export default LandingPage