import React from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PhoneIcon from "@mui/icons-material/Phone";
import PrintIcon from "@mui/icons-material/Print";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

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
          justifyContent: "space-between",
          padding: "3rem 0",
          // bgcolor: "brown",
          margin: "0 auto",
        }}
      >
        <span
          style={{ width: "100%", height: "2px", backgroundColor: "#F4511E" }}
        ></span>
        <div className={classes.logoSocial}>
          <Box
            className={classes.footLogo}
          >
            <img
              className={classes.footLogoSelf}
              style={{ color: "green" }}
              width="100%"
              src="/img/logo.svg"
              alt="logo"
            />
          </Box>
          <div className={classes.social}>
            <div className={classes.socialItem} style={{ padding: "1rem 0" }}>
              <FmdGoodIcon
                style={{ marginRight: "0.5rem", color: "#F4511E" }}
              />{" "}
              345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
            </div>
            <div
              className={classes.socialItem}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <PhoneIcon
                  style={{ marginRight: "0.5rem", color: "#F4511E" }}
                />{" "}
                <span>233548505357</span>
              </span>
              <span style={{ display: "flex", alignItems: "center" }}>
                <PrintIcon
                  className={classes.icon}
                  style={{ marginRight: "0.5rem", color: "#F4511E" }}
                />{" "}
                (123) 456-7890
              </span>
            </div>
            <div
              className={classes.socialItem}
              style={{ display: "flex", alignItems: "center" }}
            >
              <span style={{ marginRight: "1rem", padding: "1rem 0" }}>
                SocialMedia
              </span>
              <span>
                <FacebookIcon
                  style={{ marginRight: "1.5rem", color: "#F4511E" }}
                />
                <LinkedInIcon
                  style={{ marginRight: "1.5rem", color: "#F4511E" }}
                />
                <TwitterIcon
                  style={{ marginRight: "1.5rem", color: "#F4511E" }}
                />
                <PinterestIcon
                  style={{ marginRight: "1.5rem", color: "#F4511E" }}
                />
                <YouTubeIcon
                  style={{ marginRight: "1.5rem", color: "#F4511E" }}
                />
                <InstagramIcon style={{ color: "#F4511E" }} />
              </span>
            </div>
          </div>
        </div>
        <footer className={classes.footerNav}>
          <ul className={classes.footNav}>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/about">contact us</a>
            </li>
            <li>
              <a href="/con">Help</a>
            </li>
            <li>
              <a href="/ani">Privacy Policy</a>
            </li>
            <li>
              <a href="/ano">Disclaimer</a>
            </li>
          </ul>
          <p className={classes.copyRight}>
            Copyright © 2023 Minimumlivingcost. All rights reserved
          </p>
        </footer>
      </Box>
    </div>
  );
};

export default Footer;
