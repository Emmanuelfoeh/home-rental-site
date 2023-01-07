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
    },
  };
});

export default useStyles;
