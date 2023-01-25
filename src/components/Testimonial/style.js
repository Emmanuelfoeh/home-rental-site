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
      },
    },
    carousel: {
      display: "flex",
      flexDirection: "column",
      flex: "60%",
      order: "2",
      // backgroundColor: "brown",
      // justifyContent: "center",
      padding: "5rem 0",
      height: "100%",
      // border: "1px solid red",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        alignItems:"center",
      },
    },
    carouselInner: {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },

      "& p":{
 [theme.breakpoints.down("sm")]: {
        width: "100%",
      // backgroundColor:"green",
      }
      }
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
