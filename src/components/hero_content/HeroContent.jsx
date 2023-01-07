import React from "react";
import Map from "../map/Map";


import useStyles from "./style";

const HeroContent = () => {
    const {classes} = useStyles();
    
  return (
    <div className={classes.HeroContent}>
      <div className={classes.heroText}>The Most Affordable Place To Stay in Ghana</div>
      <Map />
    </div>
  );
};

export default HeroContent;
