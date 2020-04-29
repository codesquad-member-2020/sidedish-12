import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import menus from "./constant/menuConstant.js";
import MenuItem from "./MenuItem.jsx";

const Menu = () => {
  const classes = useStyles();
  const [menuDataList] = useState(menus.items);

  return (
    <article className={classes.root}>
      {menuDataList.map((item, idx) => {
        return <MenuItem title={item.title} list={item.list} key={idx} />;
      })}
    </article>
  );
};

const useStyles = makeStyles({
  root: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#483F35",
    height: "50px",
    margin: "0px",
    padding: "0px",
  },
});

export default Menu;
