import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    footer: {
      // height: "21rem",
      border:"1px solid black",
      padding:"3rem 0",
      // backgroundColor: "blue",
    },
    logoSocial:{
      display:"flex",
      columnGap:"2rem",
    }
  };
});

export default useStyles