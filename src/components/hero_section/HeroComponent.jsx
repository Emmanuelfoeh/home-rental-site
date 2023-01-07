import React from "react";

import useStyles from "./style";
import Header from "../Header/Header";
import { Box } from "@mui/material";

const HeroComponent = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.heroContainer}>
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
      </Box>
    </div>
  );
};

export default HeroComponent;
