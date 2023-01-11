import { CssBaseline, Box } from "@mui/material";
import React from "react";
import HeroComponent from "../components/hero_section/HeroComponent";
import Service from "../components/service/Service";
import ListProperty from "../components/List_Property/ListProperty";
import LifeStyle from "../components/LifeStyle/LifeStyle";
import NewProperty from "../components/AddNewProperty/NewPropertyRegistration";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../components/Footer/Footer";

const LandingPage = () => {
  return (
    <>
      <CssBaseline />
      <Box
        maxWidth="xl"
        sx={{ width: "100%", display: "flex", flexDirection: "column" }}
      >
        <HeroComponent />
        <Service />
        <ListProperty />
        <LifeStyle />
        <NewProperty />
        <Testimonial />
        <Footer />
      </Box>
    </>
  );
};

export default LandingPage;
