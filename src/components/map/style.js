import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    mapContainer: {
      display: "flex",
      flexDirection: "column",
      marginRight: "2rem",
    },
    map: {
      width:"340px",
      height:"240px",
      borderRadius: "30px",
      // border:"1px solid black",
      overflow: "hidden,",
      "& img":{
        width:"100%",
        height:"100%",
      },
    },
    selectInput1: {
      width: "30%",
      fontSize: "12px",
      backgroundColor: "transparent",
      padding: "0.2rem 0.4rem",
    },
    selectInput2: {
      width: "60%",
      fontSize: "12px",
      backgroundColor: "transparent",
      padding: "0.3rem 0.5rem",
    },
    materialIcons: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "20%",
      margin: "auto auto",
      backgroundColor: "#23A6F0",
      color: "white",
      padding: "0.5rem",
    },
    inputBox: {
      display: "flex",
      backgroundColor: "#F9F9F9",
    },
  };
});

export default useStyles;
