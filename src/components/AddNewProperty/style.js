import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    newPropertyContainer: {},
    propertyHeader: {},
    card: {
      display: "flex",
      flexDirection: "column",
      boxShadow: "0px 4px 63px rgba(0, 0, 0, 0.15)",

      "& h3": {
        justifySelf: "center",
        margin: "1rem auto",
      },
    },
    form: {
      // display: "flex",
      // flexDirection: "column",
      // gridTemplateColumns: "repeat(auto-fit,minmax(318px,1fr))",
      // gridTemplateRows: "repeat(6,1fr)",
      padding: "1rem 3rem",
    },

    inputWrap: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(318px,1fr))",
      columnGap: "1.5rem",
    },
    formLabel: {
      display: "block",
      fontSize: "0.875rem",
      marginBottom: "0.5rem",
      textTransform: "capitalize",
      letterSpacing: "1px",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "24px",
    },
    formRow: {
      marginBottom: "1rem",
    },
    textAreaField: {
      width: "100%",
      padding: "0.375rem 0.75rem",
      borderRadius: "0.25rem",
      background: "#E6E6E6",
      border: "1px solid #bcccdc",
      height: "7rem",
    },

    viewBtn: {
      width:"32rem",
      backgroundColor: "#F4511E",
      marginTop:"1rem",
      padding: "0.8rem",
      "&:hover": {
        backgroundColor: "#c33306",
      },
    },
  };
});

export default useStyles;
