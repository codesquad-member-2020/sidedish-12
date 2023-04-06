import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const DeliveryType = ({ deliveryDatas }) => {
  const classes = useStyles();

  return (
    <div className={classes.deliveryTypeStyles}>
      {deliveryDatas.map((el, idx) => {
        return <div key={idx}>{el}</div>;
      })}
    </div>
  );
};

const useStyles = makeStyles({
  deliveryTypeStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    top: "0%",
    position: "absolute",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    backgroundColor: "black",
    opacity: "0.7",
    color: "#fff",
    "& div": {
      fontSize: "26px",
      fontWeight: "bold",
      borderBottom: "3px solid #fff",
    },
  },
});

export default DeliveryType;
