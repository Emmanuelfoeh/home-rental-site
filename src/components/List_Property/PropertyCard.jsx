import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";

import useStyles from "./style";

export default function PropertyCard({ image }) {
  const { classes } = useStyles();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="300" image={image} alt="room 1" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            2578 Folsom street, san francisco, CA, 94110
          </Typography>

          <Typography variant="body2" fontSize="12px" color="text.secondary">
            private room
          </Typography>

          <Typography
            variant="body2"
            color="#F4511E"
            fontSize="24px"
            fontWeight="700"
          >
            $1200/month
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className={classes.cardFooter}>
        <p><BedIcon /> 4 </p>
        <p>  <BathtubIcon/> 2</p>
        <p><img src="img/Size.svg" alt="size" /> 2</p>
      </div>
    </Card>
  );
}
