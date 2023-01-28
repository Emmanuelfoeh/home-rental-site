import React from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import useStyles from "./style";

const Header = () => {
  const { classes } = useStyles();

  return (
    <header className={classes.header}>
      <span className={classes.logo}>
        <img className={classes.logoImg} src="/img/logo.png" alt="logo" />
      </span>

      <nav className={classes.navBar}>
        <a href="/home" className={`${classes.navItem} ${classes.activeLink}`}>
          Home
        </a>
        <a
          href="/landlord"
          className={`${classes.navItem}`}
        >
          LandLords
        </a>
        <a href="/tenants" className={classes.navItem}>
          Tenants
        </a>
        <a href="/contact" className={classes.navItem}>
          Contact Us
        </a>
      </nav>
<DehazeIcon className={classes.hamburger} sx={{color:"white"}}/>
    </header>
  );
};

export default Header;
