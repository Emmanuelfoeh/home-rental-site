import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    formInput: {
      width: "100%",
      padding: "0.375rem 0.75rem",
      borderRadius: "0.25rem",
      height: " 35px",
      background: "#E6E6E6",
      border: "1px solid #bcccdc",
    },
    formLabel: {
      display: "block",
      fontSize: "0.875rem",
      marginBottom: "0.5rem",
      textTransform: "capitalize",
      letterSpacing: "1px",
    },
    formRow: {
      marginBottom: "1rem",
    },
    formSelect: {
      width: "100%",
      padding: "0.375rem 0.75rem",
      borderRadius: "0.25rem",
      height: " 35px",
      background: "#E6E6E6",
      border: "1px solid #bcccdc",
    },
  };
});

export default useStyles;
