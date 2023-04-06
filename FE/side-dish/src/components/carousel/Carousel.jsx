import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselItem from "./CarouselItem.jsx";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import ModalPage from "./ModalPage.jsx";

const Carousel = ({ lists, CarouselTitle, subTitle }) => {
  const classes = useStyles();

  const [modalData, setModalData] = useState({
    title: null,
    top_image: null,
    point: null,
    delivery_info: null,
    delivery_fee: null,
    s_price: null,
    n_price: null,
    description: null,
    thumb_images: [],
    detail_section: [],
  });
  const [modalOpen, setModalOpen] = useState(false);

  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
  };

  const modalOpenHandler = async (e) => {
    const hashData = e.target.dataset.hash;
    const response = await fetch(
      `http://54.180.50.220:8080/banchans/${hashData}`
    );

    const getData = await response.json();
    setModalData(getData.data);
    setModalOpen(true);
  };

  const modalCloseHandler = () => {
    setModalOpen(false);
  };

  return (
    <div className={classes.defaultStyles}>
      <h1 className={classes.titleStyles}>{CarouselTitle}</h1>
      <h2 className={classes.subTitleStyles}>{subTitle}</h2>
      <div className={classes.root}>
        <Slider {...setting} className={classes.carouselStyles}>
          {lists.map((el) => {
            return (
              <CarouselItem
                itemHashData={el.id}
                title={el.title}
                description={el.description}
                imageUrl={el.image}
                altContent={el.alt}
                nPrice={el.n_price}
                sPrice={el.s_price}
                deliveryType={el.delivery_type}
                badge={el.badge}
                modalClickHandler={modalOpenHandler}
              />
            );
          })}
        </Slider>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        onClose={modalCloseHandler}
        open={modalOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpen}>
          <div className={classes.paper}>
            <ModalPage
              title={modalData.title}
              topImage={modalData.top_image}
              point={modalData.point}
              deliveryInfo={modalData.delivery_info}
              deliveryFee={modalData.delivery_fee}
              sPrice={modalData.s_price}
              nPrice={modalData.n_pirce}
              description={modalData.description}
              thumbImages={modalData.thumb_images}
              detailSection={modalData.detail_section}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  defaultStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    lineHeight: "35px",
    marginTop: "50px",
    marginBottom: "50px",
  },
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  carouselStyles: {
    width: "90%",
    "& .slick-prev": {
      width: "50px",
      height: "50px",
      left: "-50px",
      background: "url(https://img.icons8.com/plasticine/48/000000/back.png)",
      backgroundRepeat: "no-repeat",
      opacity: "0.7",
      "&:hover": {
        opacity: "1",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .slick-next": {
      width: "50px",
      height: "50px",
      right: "-50px",
      background:
        "url(https://img.icons8.com/plasticine/48/000000/more-than.png)",
      backgroundRepeat: "no-repeat",
      opacity: "0.7",
      "&:hover": {
        opacity: "1",
      },
      "&:before": {
        display: "none",
      },
    },
  },
  titleStyles: { fontSize: "18px", color: "#999999" },
  subTitleStyles: {
    fontSize: "34px",
    height: "50px",
    color: "#333333",
  },
  modal: {
    zIndex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "fixed",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "1000px",
    height: "600px",
    padding: "0px",
  },
}));

export default Carousel;
