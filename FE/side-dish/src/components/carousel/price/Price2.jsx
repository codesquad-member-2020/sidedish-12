import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  nPriceStyles: {
    marginRight: "5px",
    textDecoration: "line-through",
    color: "#666666",
  },

  sPriceStyles: {
    fontWeight: "bold",
    color: "#2AC1BC",
    fontSize: "26px",
  },
});

const Price2 = ({ nPrice, sPrice }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.nPriceStyles}>{nPrice}</span>
      <span className={classes.sPriceStyles}>{sPrice}</span>
    </div>
  );
};

export default Price2;
