import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  nPriceStyles: {
    fontWeight: "bold",
    color: "#2AC1BC",
    fontSize: "26px",
  },
});

const Price1 = ({ sPrice }) => {
  const classes = useStyles();

  return (
    <div>
      <span className={classes.nPriceStyles}>{sPrice}</span>
    </div>
  );
};

export default Price1;
