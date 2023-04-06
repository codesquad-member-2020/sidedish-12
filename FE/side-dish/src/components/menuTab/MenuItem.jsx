import React, { useState } from "react";
import MenuList from "./MenuList.jsx";
import { makeStyles } from "@material-ui/core/styles";

const MenuItem = ({ title, list }) => {
  const classes = useStyles();
  const [isShown, setIsShown] = useState(false);

  return (
    <menu className={classes.root}>
      <div
        className={classes.itemStyles}
        onMouseEnter={() => {
          setIsShown(true);
        }}
        onMouseLeave={() => setIsShown(false)}
      >
        <div>
          <span className={classes.titleStyles}>{title}</span>
        </div>
        {isShown && <MenuList lists={list} />}
      </div>
    </menu>
  );
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  itemStyles: {
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "bold",
    padding: "13px 0 18px",
    width: "102px",
    cursor: "pointer",
    "&:hover": {
      color: "#1FCBC7",
      backgroundColor: "#fff",
    },
  },

  titleStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MenuItem;
