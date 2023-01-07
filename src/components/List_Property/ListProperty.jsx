import React from "react";

import useStyles from "./style";
import { Box, Button } from "@mui/material";
import PropertyCard from "./PropertyCard";

const ListProperty = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.listPropertyContainer}>
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          // bgcolor:"brown",
          margin: "0 auto",
        }}
      >
        <div className={classes.propertyHeader}>
          <h4>List of properties</h4>
          <Button variant="contained" className={classes.viewBtn}>
            View All Properties
          </Button>
        </div>

        <div className={classes.cardBox}>
          <PropertyCard image={`img/card_img1.png`} />
          <PropertyCard image={`img/card2.png`} />
          <PropertyCard image={`img/card3.png`} />
          <PropertyCard image={`img/card4.png`} />
          <PropertyCard image={`img/card5.png`} />
          <PropertyCard image={`img/card6.png`} />
        </div>
      </Box>
    </div>
  );
};

export default ListProperty;
