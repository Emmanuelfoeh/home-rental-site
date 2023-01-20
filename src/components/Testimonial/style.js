import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    TestimonialContainer: {
      height: "25.27rem",
      backgroundColor: "rgba(244, 81, 30, 0.07)",
    },
    carousel: {
      display: "flex",
      flexDirection: "column",
      flex: "60%",
      // justifyContent: "center",
      padding: "5rem 0",
      height: "100%",
      // border: "1px solid red",
    },
    TestVideo: {
      flex: "40%",
      // border: "1px solid red",
    },
    navCircle: {
      display: "flex",
      marginTop: "2rem",
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
