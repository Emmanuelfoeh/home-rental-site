import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    header: {
      display: "flex",
      alignItems: "center",
      //   justifyContent: "space-between",
      borderBottom: "0.5px solid white",
    },
    logo: {
      marginRight: theme.spacing(10),
    },

    navBar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "end",
      width: "40%",
      height: "100%",
      marginLeft: "10rem",
    },

    navItem: {
      marginRight: "1rem",
      textDecoration: "none",
      fontWeight: 500,
      color: "white",
      height: "70%",
      "&:hover": {
        borderBottom: "2.5px solid white",
      },
    },
    activeLink: {
      borderBottom: "2.5px solid white",
    },

    apply: {
      marginRight: theme.spacing(2),
      "&:hover": {
        backgroundColor: "primary.main",
        opacity: [0.9, 0.8, 0.7],
      },
    },
  };
});

export default useStyles;
