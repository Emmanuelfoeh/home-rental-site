import React from "react";
import useStyles from "./style";
import { Box, Button } from "@mui/material";

const LifeStyle = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.LifeStyleContainer}>
      <Box
        sx={{
          width: "85%",
          display: "flex",
          //   flexDirection: "column",
          margin: "0 auto",
        }}
      >
        <div className={classes.stylePicture}>
          <div className={classes.firstPics}>
            <div className={classes.firstPicsContainer1}>
              <p className={classes.flexibleText}>Flexible Leases</p>
              {/* <img src="/img/flexible.png" alt="flexible" /> */}
            </div>

            <div className={classes.firstPicsContainer2}>
              <p>7-Day Happiness Guaranteed</p>
              {/* <img src="/img/happiness.png" alt="Happiness" /> */}
            </div>
          </div>

          <div className={classes.secondPics}>
            <div className={classes.secondPicsContainer1}>
              <p>Monthly House Cleaning</p>
              {/* <img src="/img/cleaning.png" alt="Cleaning" /> */}
            </div>
            <div className={classes.secondPicsContainer2}>
              <p>roomates.png</p>
            </div>

            {/* <img src="/img/roomates.png" alt="roommates" /> */}
          </div>
        </div>
        <div className={classes.styleText}>
          <h2>Flexibility and options to suit your lifestyle.</h2>
          <p>
            You need it? We got it. We make finding your next home easy,
            comfortable, and simple. From our happiness guarantee to our
            selective roommate finder option. We provide you the flexibility
            that you most desire.
          </p>

          <Button className={classes.btn} variant="contained">Search Rooms</Button>
        </div>
      </Box>
    </div>
  );
};

export default LifeStyle;
