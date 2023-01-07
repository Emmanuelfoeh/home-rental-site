// import { makeStyles } from  "@mui/styles";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    heroContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100vh",
      paddingTop:"1rem",
      color: theme.palette.primary.main,
      backgroundImage: "url(/img/hero_img.png)",
      backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    },
    apply: {
      marginRight: theme.spacing(2),
    },
  };
});

export default useStyles;
