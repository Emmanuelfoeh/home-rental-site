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
        fontSize:"2rem",
        fontWeight:"600",
      },
    },
    viewBtn: {
      backgroundColor: "#F4511E",
      padding:"0.8rem",
      "&:hover": {
        backgroundColor: "#c33306",
      },
    },

    cardBox: {
      display: "grid",
      gridTemplateColumns: "358px 358px 358px",
      justifyContent: "center",
      columnGap: "1rem",
      rowGap: "2rem",
      //   backgroundColor:"brown",
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
  };
});

export default useStyles;
