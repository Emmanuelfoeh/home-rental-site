import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    HeroContent: {
      display: "flex",
      // flexDirection:'row',
      justifyContent: "space-between",
      alignItems: "center",
      height: "60vh",
      marginTop: "4rem",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
        // height: "30vh",
      },
    },
    heroText: {
      display: "flex",
      color: "white",
      width: "40%",
      fontSize: "3rem",
      fontWeight: "700",
      textTransform: "capitalize",
      letterSpacing: "-1px",
      //   backgroundColor: "brown",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        fontSize: "2rem",
        // fontWeight: "500",
        // backgroundColor:"green",
      },
    },
  };
});

export default useStyles;
