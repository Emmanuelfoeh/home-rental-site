import React from "react";
import useStyles from "./style";
import { Avatar, Box } from "@mui/material";

const Testimonial = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.TestimonialContainer}>
      <Box
        sx={{
          width: "85%",
          display: "flex",
          height: "100%",
          // flexDirection: "column",
          // bgcolor:"brown",
          margin: "0 auto",
        }}
      >
        <div className={classes.carousel}>
          <p style={{ width: "80%", position: "relative" }}>
            <img
              src="/img/quote.svg"
              alt="quote"
              style={{ width: "24px", height: "24px", marginRight: "5px" }}
            />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
            pellentesque est. Curabitur at odio sit amet libero vulputate
            efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
            faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
            fringilla finibus.
          </p>

          <div
            style={{
              display: "flex",
              alignSelf: "start",
              alignItems: "center",
              padding: "0.8rem 0",
              // border: "1px solid black",
            }}
          >
            <Avatar
              alt="Joy"
              src="/img/joy.jpg"
              sx={{ marginRight: "0.7rem", border: "1px solid #F4511E" }}
            />
            <div style={{ marginBottom: "0" }}>
              <h6
                style={{ margin: "0", fontSize: "0.9rem", fontWeight: "700" }}
              >
                Joy Drah
              </h6>
              <p style={{ margin: "0", fontSize: "0.7rem" }}>Property Owner</p>
            </div>
          </div>
          <div className={classes.navCircle}>
            <span style={{ backgroundColor: "#F4511E" }}></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={classes.TestVideo}>
          <iframe
            width="420"
            height="400"
            title="testimonials"
            src="https://www.youtube.com/embed/MZwe7Qcmj5w"
          ></iframe>
        </div>
      </Box>
    </div>
  );
};

export default Testimonial;
