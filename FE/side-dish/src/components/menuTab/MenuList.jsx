import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const MenuList = ({ lists }) => {
  const classes = useStyles();

  return (
    <ul className={classes.ulStyles}>
      {lists.map((el, idx) => {
        return <li key={idx}>{el}</li>;
      })}
    </ul>
  );
};

const useStyles = makeStyles({
  ulStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "#fff",
    color: "black",
    borderLeft: "0.5px solid #ccc",
    borderRight: "0.5px solid #ccc",
    borderBottom: "0.5px solid #ccc",
    marginTop: "18px",
    width: "102px",
    lineHeight: "20px",
    zIndex: "1",
    "& li": {
      "&:hover": {
        color: "#1FCBC7",
      },
    },
  },
});

export default MenuList;
