// import { makeStyles } from  "@mui/styles";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    serviceHeader: {
      // width:"836px",
      height: "64px",
      fontSize: "2rem",
      fontWeight: "800",
      // backgroundColor:"gray",
      position: "relative",
    },
    serviceHeaderLine: {
      position: "absolute",
      bottom: "1rem",
      left: "0",
      height: "2px",
      backgroundColor: "#F4511E",
      width: "360px",
    },
    serviceContent: {
      display: "flex",
    },
    serviceImage: {
      flex: "30%",
      // border: "1px solid green",
      //       background: url(.jpg), #C4C4C4;
      // box-shadow: 5px 24px 53px rgba(0, 0, 0, 0.25);
      // border-radius: 50px 0px;
    },
    serviceItems: {
      display: "grid",
      flex: "70%",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gap: "0.8rem",
      margin:"3rem 0",
      // border: "1px solid green",
    },
    serviceItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
    },
    serviceItemIcon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width:"77px",
      height:"77px",
      color: "#F4511E",
      boxShadow: "0px 12px 19px 0px #00000026",
    },
    serviceItemText: {
      textTransform: "capitalize",
      fontSize:"1.2rem",
      fontWeight:"600",
    },
  };
});

export default useStyles;
