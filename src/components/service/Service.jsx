import { Box } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

import useStyles from "./style";

const Service = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.serviceContainer}>
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          // bgcolor:"brown",
          margin: "0 auto",
        }}
      >
        <h4 className={classes.serviceHeader}>
          Minimum Living cost Takes Care Of Everything
          <span className={classes.serviceHeaderLine}></span>
        </h4>
        <div className={classes.serviceContent}>
          <img
            className={classes.serviceImage}
            src={`/img/serviceImg.png`}
            alt="serviceImg"
            loading="lazy"
          />

          <div className={classes.serviceItems}>
            <div className={classes.serviceItem}>
              <span className={classes.serviceItemIcon}>
                <MonetizationOnIcon sx={{ width: "45px", height: "45px" }} />
                {/* <img src="" alt="" /> */}
              </span>
              <p className={classes.serviceItemText}>
                Pay as little as possible
              </p>
            </div>
            <div className={classes.serviceItem}>
              <span className={classes.serviceItemIcon}>
                <HomeWorkIcon sx={{ width: "45px", height: "45px" }} />
                {/* <img src="" alt="" /> */}
              </span>
              <p className={classes.serviceItemText}>
               Enjoy wisdom of community
              </p>
            </div>
            <div className={classes.serviceItem}>
              <span className={classes.serviceItemIcon}>
                {/* <MonetizationOnIcon /> */}
                <img src="/img/care.svg" alt="ar" width="45px" height="45px" />
              </span>
              <p className={classes.serviceItemText}>
                Let somebody else take care of landlords
              </p>
            </div>
            <div className={classes.serviceItem}>
              <span className={classes.serviceItemIcon}>
                <img src="/img/env.svg" alt="env" width="45px" height="45px" />
              </span>
              <p className={classes.serviceItemText}>
                Enjoy peaceful environment
              </p>
            </div>
            <div className={classes.serviceItem}>
              <span className={classes.serviceItemIcon}>
                <img
                  src="/img/safe.svg"
                  alt="safe"
                  width="45px"
                  height="45px"
                />
              </span>
              <p className={classes.serviceItemText}>Stay safe, save money</p>
            </div>
            <div className={classes.serviceItem}>
              <span className={classes.serviceItemIcon}>
                <img src="/img/payUs.svg" alt="pay" width="45px" height="45px" />
              </span>
              <p className={classes.serviceItemText}>
                Pay for what you use
              </p>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Service;
