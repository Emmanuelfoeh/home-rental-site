import { Box } from "@mui/material";
// import { MapContainer } from "react-leaflet/MapContainer";
// import { TileLayer } from "react-leaflet/TileLayer";
// import { useMap } from "react-leaflet/hooks";
// import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import SelectSmall from "../Form/FormSelect";

import useStyles from "./style";
import { Search } from "@mui/icons-material";

const Map = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.mapContainer}>
      
      <div id="map" className={classes.map}>
        {/* <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer> */}
         <img src="/img/map_img.png" alt="Map" />
      </div>
     

      <Box
        sx={{
          bgcolor: "white",
          padding: "0.8rem",
          borderRadius: "8px",
          marginTop: "1rem",
          height: "4rem",
        }}
      >
        {/* <SelectSmall/> */}
        <div className={classes.inputBox}>
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
