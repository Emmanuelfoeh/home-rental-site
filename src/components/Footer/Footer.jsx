import React from "react";

import useStyles from "./style";
import { Box } from "@mui/material";

const Footer = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Box
        sx={{
          width: "85%",
          display: "flex",
          flexDirection: "column",
          // bgcolor: "brown",
          margin: "0 auto",
        }}
      >
        <span
          style={{ width: "100%", height: "2px", backgroundColor: "#F4511E" }}
        ></span>
        <div className={classes.logoSocial}>
          <div className={classes.footLogo}>LoGo</div>
          <div className={classes.social}>
            <div className={classes.socialItem}>
              345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
            </div>
            <div className={classes.socialItem}>the two</div>
            <div className={classes.socialItem}>the troe s sfjg</div>
          </div>
        </div>
        <footer className={classes.footerNav}>
          <ul className={classes.footNav}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/con">contact</a>
            </li>
            <li>
              <a href="/ani">another</a>
            </li>
            <li>
              <a href="/ano">another</a>
            </li>
          </ul>
          <div className={classes.copyRight}>loerm htlek k lroe js kk</div>
        </footer>
      </Box>
    </div>
  );
};

export default Footer;
