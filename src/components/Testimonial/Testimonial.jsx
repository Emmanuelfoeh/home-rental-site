import React from "react";
import useStyles from "./style";
import { Avatar, Box } from "@mui/material";
import Carousel from "./Carousel";

const Testimonial = () => {
  const { classes } = useStyles();

  const slice = [
    {
      image: "/img/joy.jpg",
      name: "Joy Drah",
      title: "Property Owner",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.",
    },
    {
      image: "/img/roomates.png",
      name: "Opana Art",
      title: "Agent",
      description:
        "lorem lep som rk and see and see   and see and see and see and see and see and see and see and see is available",
    },
    {
      image: "/img/tamar.jpg",
      name: "Logo",
      title: "Brand",
      description:
        "lorem lep som rk and see and see   and see and see and see and see and see and see and see and see is available",
    },
    {
      image: "/img/kirill.jpg",
      name: "Erica",
      title: "Investor",
      description:
        "lorem lep som fourth carousel lorem lep som fourth carousel lorem lep som fourth carousel lorem lep som fourth carousel",
    },
    {
      image: "/img/rui.jpg",
      name: "Emma",
      title: "Developer",
      description:
        "lorem lep som last carousel lorem lep som last carousel lorem lep som last carousel lorem lep som last carousel lorem lep som last carousel",
    },
  ];

  return (
    <div className={classes.TestimonialContainer}>
      <Box
        className={classes.carouselTestContainer}
      >
        <div className={classes.carousel}>
          <Carousel slices={slice} />
        </div>

        <div className={classes.TestVideo}>
          <iframe
            width="420"
            height="400"
            title="testimonials"
            src="https://www.youtube.com/embed/MZwe7Qcmj5w"
          ></iframe>
        </div>
      </Box>
    </div>
  );
};

export default Testimonial;
