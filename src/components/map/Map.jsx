import { Box } from "@mui/material";
import SelectSmall from "../FormSelect";

import useStyles from "./style";
import { Search } from "@mui/icons-material";

const Map = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.mapContainer}>
      <Box className={classes.map}>
        <img src="/img/map_img.png" alt="Map" />
      </Box>

      <Box
        sx={{
          bgcolor: "white",
          padding: "0.8rem",
          borderRadius: "8px",
          height: "4rem",
        }}
      >
        {/* <SelectSmall/> */}
        <div className = {classes.inputBox}>
            <select className={classes.selectInput1}>
          <option value="">All Type</option>
          <option value="one">Self Contain</option>
          <option value="one">Flat</option>
        </select>

        <select className={classes.selectInput2}>
          <option value="">Neighborhood</option>
          <option value="one">Self Contain</option>
          <option value="one">Flat</option>
        </select>

        <span className={classes.materialIcons}>
          <Search />
        </span>
        </div>

      </Box>
    </div>
  );
};

export default Map;
