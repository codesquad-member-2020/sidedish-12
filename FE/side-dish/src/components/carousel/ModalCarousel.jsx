import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";

const useStyles = makeStyles({
  itemStyles: {
    width: "100px",
    height: "100px",
    "& img": {
      width: "100px",
      height: "100px",
      border: "3px solid #ccc",
    },
  },
});

const ModalCarousel = ({ imageList }) => {
  const classes = useStyles();

  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
  };

  return (
    <Slider {...setting}>
      {imageList.map((el) => {
        return (
          <div className={classes.itemStyles}>
            <img src={el} />
          </div>
        );
      })}
    </Slider>
  );
};

export default ModalCarousel;
