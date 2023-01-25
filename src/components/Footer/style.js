import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    footer: {
      // height: "21rem",
      // border: "1px solid black",
      padding: "3rem 0",
      // backgroundColor: "blue",
    },
    logoSocial: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "3rem 4rem",
      // backgroundColor: "blue",
      columnGap: "2rem",
    },

    footerNav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: "2px solid #7BB9FC",
      width: "100%",
    },
    footLogo: {
      width: "18rem",
      height: "10rem",
      padding: "0.5rem",
      borderRadius: "10px",
      background:
        " linear-gradient(32deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
    },
    footNav: {
      display: "flex",
      fontSize: "0.8rem",
      columnGap: "2rem",
      "& li": {
        listStyle: "none",
        // padding: "0.5rem 0",
        "& a": {
          color: "#0A142F",
          textTransform: "uppercase",
          textDecoration: "none",
          "&:hover": {
            color: "#F4511E",
            textDecoration: "none",
          },
        },
      },
    },
    copyRight: {
      fontSize: "0.7rem",
      "&:hover": {
        color: "#F4511E",
      },
    },
  };
});

export default useStyles;
