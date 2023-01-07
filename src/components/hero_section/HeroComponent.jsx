import React from "react";

import useStyles from "./style";
import Header from "../Header/Header";
import { Box } from "@mui/material";
import HeroContent from "../hero_content/HeroContent";

const HeroComponent = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.heroContainer}>
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex:"2"
        }}
      >
        <Header />
        <HeroContent/>
      </Box>
    </div>
  );
};

export default HeroComponent;
