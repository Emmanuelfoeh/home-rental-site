import React, { useEffect, useState } from "react";
import useStyles from "./style";
import { Avatar } from "@mui/material";

const Carousel = ({ slices }) => {
  const { classes } = useStyles();
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (slice) => {
    setCurrentSlide(slice);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slices.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentSlide, slices.length]);

  return (
    <>
      {slices.map((slice, idx) => {
        const { image, name, title, description } = slice;
        return (
          currentSlide === idx && (
            <div key={idx} className={classes.carouselInner}>
              <img
                src="/img/quote-left.png"
                alt="quote"
                className={classes.carouselQuote}
              />

              <p>{description}</p>

              <div
                style={{
                  display: "flex",
                  alignSelf: "start",
                  alignItems: "center",
                  padding: "0.8rem 0",
                }}
              >
                <Avatar
                  alt="Joy"
                  src={image}
                  sx={{ marginRight: "0.7rem", border: "1px solid #F4511E" }}
                />
                <div style={{ marginBottom: "0" }}>
                  <h6
                    style={{
                      margin: "0",
                      fontSize: "0.9rem",
                      fontWeight: "700",
                    }}
                  >
                    {name}
                  </h6>
                  <p style={{ margin: "0", fontSize: "0.7rem" }}>{title}</p>
                </div>
              </div>
            </div>
          )
        );
      })}
      <div className={classes.navCircle}>
        {slices.map((slice, idx) => {
          return (
            <span
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`${
                currentSlide === idx ? classes.activeCarousel : ""
              }`}
            ></span>
          );
        })}
      </div>
    </>
  );
};

export default Carousel;
