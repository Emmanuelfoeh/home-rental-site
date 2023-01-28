import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    TestimonialContainer: {
      // height: "25.27rem",
      backgroundColor: "rgba(244, 81, 30, 0.07)",
    },
    carouselTestContainer: {
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
        margin: "0 0",
        width: "100%",
      },
    },
    carousel: {
      display: "flex",
      flexDirection: "column",
      flex: "60%",
      order: "2",
      padding: "5rem 0",
      height: "100%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        alignItems: "center",
      },
    },
    carouselInner: {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },

      "& p": {
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          zIndex: 3,
          // backgroundColor:"green",
        },
      },
    },
    carouselQuote: {
      width: "30px",
      height: "30px",
      marginRight: "5px",
      position: "absolute",
      top: "0.6rem",
      left: "-0.8rem",
      zIndex: "-2",
      [theme.breakpoints.down("sm")]: {
       top:"1rem",
       left:"-2rem",
        // backgroundColor:"green",
      },
    },

    TestVideo: {
      flex: "40%",
      order: "2",
      // justifyContent: "center",
      // border: "1px solid red",
    },
    navCircle: {
      display: "flex",
      marginTop: "2rem",
      [theme.breakpoints.down("sm")]: {
        margin: "0 auto",
      },
      "& span": {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        marginRight: "10px",
        backgroundColor: "#D9DBE1",
      },
    },
  };
});

export default useStyles;
