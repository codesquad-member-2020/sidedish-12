import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ModalCarousel from "./ModalCarousel.jsx";

const ModalPage = ({
  title,
  topImage,
  point,
  deliveryInfo,
  deliveryFee,
  sPrice,
  nPrice,
  description,
  thumbImages,
  detailSection,
}) => {
  const classes = useStyles();

  const price = nPrice === null ? sPrice : sPrice;

  const extractPrice = price.split("원")[0];

  const [totalPrice, setTotalPrice] = useState(extractPrice);
  const [topImg, setTopImg] = useState(topImage);

  const formatTotalPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const inputHandler = (e) => {
    const counterValue = e.target.value;
    const defaultPrice = extractPrice.split(",").join("");
    formatTotalPrice(defaultPrice * counterValue);

    setTotalPrice(formatTotalPrice(defaultPrice * counterValue));
  };

  const imageClickHandler = (e) => {
    const targetSrc = e.target.src;
    setTopImg(targetSrc);
  };

  return (
    <div className={classes.screen}>
      <div className={classes.root}>
        <div className="top_image">
          <img className={classes.topImageStyles} src={topImg} />
        </div>
        <div className={classes.infoStyles}>
          <div className="top_tab">
            <div className="top_title">{title}</div>
            <div className="description">{description}</div>
          </div>
          <div className="info_list">
            <div className="title">포인트</div>
            <div className="content">{point}</div>
          </div>
          <div className="info_list">
            <div className="title">배송정보</div>
            <div className="content">{deliveryInfo}</div>
          </div>
          <div className="info_list">
            <div className="title">배송비</div>
            <div className="content">{deliveryFee}</div>
          </div>
          <div className="info_list price-tab">
            <div className="price">{sPrice}</div>
          </div>
          <div className="info_list product-counter-tab">
            <div className="title">수량</div>
            <div className="input_area">
              <input
                type="number"
                min="1"
                className="content counter-input"
                onClick={inputHandler}
              />
            </div>
          </div>
          <div className="info_list total-tab">
            <div className="total">
              <span className="total_title">총 상품금액</span>
              <span className="total_price">{totalPrice}원</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.middleStyles}>
        <ul className="image_list">
          {thumbImages.map((el) => {
            return (
              <li>
                <img src={el} onClick={imageClickHandler} />
              </li>
            );
          })}
        </ul>
        <div className="bucket_button">
          <button>담기</button>
        </div>
      </div>
      <div className={classes.carouselStyles}>
        <div className="title">함께하면 더 맛있는 상품</div>
        <ModalCarousel imageList={detailSection} />
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
  middleStyles: {
    display: "flex",
    "& img": {
      width: "70px",
      height: "70px",
    },
    "& .image_list": {
      display: "flex",
      width: "350px",
      margin: "5px",
    },
    "& li": {
      marginRight: "5px",
    },
    "& button": {
      width: "603px",
      backgroundColor: "#1FCBC7",
      color: "#FFF",
      height: "60px",
      marginTop: "10px",
      borderRadius: "5px",
      fontSize: "20px",
      fontWeight: "bold",
    },
  },

  topImageStyles: {
    width: "350px",
    height: "350px",
    top: "0",
    margin: "5px",
    border: "1px solid #ccc",
  },
  infoStyles: {
    margin: "5px",
    color: "#828282",

    "& .info_list": {
      display: "flex",
      height: "40px",
    },
    "& .title": {
      width: "80px",
      marginBottom: "20px",
      marginRight: "20px",
    },

    "& .content": {
      color: "#000000",
      width: "500px",
    },
    "& .price_tab": {
      height: "45px",
    },
    "& .price": {
      color: "#000000",
      width: "603px",
      fontSize: "34px",
      fontWeight: "bold",
      textAlign: "right",
      borderBottom: "2px solid #ccc",
    },
    "& .total": {
      color: "#000000",
      width: "603px",
      fontSize: "34px",
      fontWeight: "bold",
      textAlign: "right",
      marginTop: "10px",
    },
    "& .description": {
      fontSize: "18px",
      marginBottom: "20px",
    },
    "& .product-counter-tab": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderBottom: "2px solid #ccc",
      height: "60px",
      "& .title": {
        marginBottom: "0px",
      },
    },
    "& .counter-input": {
      width: "50px",
      height: "20px",
    },
    "& .input_area": {
      width: "500px",
      textAlign: "right",
    },
    "& .total_title": {
      fontSize: "15px",
      marginRight: "5px",
    },
    "& .total_price": {
      color: "#1FCBC7",
    },
    "& .top_title": {
      fontSize: "26px",
      fontWeight: "bold",
      color: "#000000",
    },
    "& .top_tab": {
      lineHeight: "30px",
    },
  },
  carouselStyles: {
    width: "800px",
    height: "100px",
    "& .title": {
      marginBottom: "10px",
      marginTop: "5px",
      fontWeight: "bold",
    },
  },
  screen: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ModalPage;
