import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const NavItem = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.itemStyles} name="item">
      <span>{title}</span>
    </div>
  );
};

const useStyles = makeStyles({
  itemStyles: {
    padding: "14px",
    height: "10px",
    cursor: "pointer",
    "&:hover": {
      color: "#1FCBC7",
    },
  },
});

export default NavItem;
