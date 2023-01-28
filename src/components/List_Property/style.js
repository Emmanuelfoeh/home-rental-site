import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    listPropertyContainer: {
      backgroundColor: "#F5F5F5",
    },
    propertyHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0.8rem 0",
      "& h4": {
        marginTop: "0",
        marginBottom: "0",
        fontSize: "2rem",
        fontWeight: "600",
      },
    },
    viewBtn: {
      backgroundColor: "#F4511E",
      padding: "0.8rem",
      "&:hover": {
        backgroundColor: "#c33306",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
        padding: "0.1rem",
      },
    },

    cardBox: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
      // gridTemplateColumns: "1fr 1fr 1fr",
      // justifyContent: "space-between",
      columnGap: "1.5rem",
      rowGap: "2.5rem",
      // backgroundColor:"brown",
    },
    privateRoom: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
      },
    },

    cardFooter: {
      display: "flex",
      //    flexBasis: "content",
      //   backgroundColor: "#F5F5F5",
      "& p": {
        // color: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "33.33%",
        padding: "0.8rem",
        marginTop: "0",
        marginBottom: "0",
        border: "0.5px solid gray",
      },
    },
    pagination: {
      display: "flex",
      // justifySelf:"center",
      width: "250px",
      height: "50px",
      margin: "2rem auto",
      backgroundColor: "red",
    },
    num: {
      width: "40px",
    },
    activePage: {
      backgroundColor: "#F4511E",
      border: "none",
    },
    prev: {
      width: "70px",
    },
    next: {
      width: "70px",
    },
  };
});

export default useStyles;
