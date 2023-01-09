import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    LifeStyleContainer: {
      padding: "3rem 0",
    },
    stylePicture: {
      display: "flex",
      flex: "50%",
      rowGap: "2rem",
      flexDirection: "column",
    },

    firstPics: {
      display: "flex",
      alignItems: "end",
      columnGap: "1.5rem",
    },

    firstPicsContainer1: {
      display: "flex",
      justifyContent: "center",
      width: "250px",
      height: "334px",
      backgroundImage: "url(/img/flexible.png)",
      backgroundSize: "cover",
      "& p": {
        color: "white",
      },
    },

    firstPicsContainer2: {
      display: "flex",
      justifyContent: "center",
      width: "270px",
      height: "270px",
      backgroundImage: "url(/img/happiness.png)",
      backgroundSize: "cover",
      "& p": {
        color: "white",
      },
    },

    secondPics: {
      display: "flex",
      alignItems: "start",
      columnGap: "1.5rem",
    },

    secondPicsContainer1: {
      display: "flex",
      justifyContent: "center",
      width: "212px",
      height: "285px",
      backgroundImage: "url(/img/cleaning.png)",
      backgroundSize: "cover",
      "& p": {
        color: "white",
      },
    },

    secondPicsContainer2: {
      display: "flex",
      justifyContent: "center",
      width: "338px",
      height: "356px",
      backgroundImage: "url(/img/roomates.png)",
      backgroundSize: "cover",
      "& p": {
        color: "white",
      },
    },

    styleText: {
      display: "flex",
      alignItems:"start",
      justifyContent: "center",
      flex: "50%",
      flexDirection: "column",
      marginLeft:"2rem",

      "& h2": {
        width: "400px",
        height: "108px",
        fontWeight: "800",
        fontSize: "2rem",
        marginBottom: "0",
      },

      "& p": {
        width: "400px",
        fontSize: "1rem",
        fontWeight: "400",
      },
    },
    btn: {
      backgroundColor: "#F4511E",
      padding: "0.8rem",
      "&:hover": {
        backgroundColor: "#c33306",
      },
    },
  };
});

export default useStyles;
