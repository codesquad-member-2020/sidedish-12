import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AiFillCaretDown } from "react-icons/ai";

const NavSelectItem = ({ ItemInfo, onActive, active }) => {
  const classes = useStyles();

  return (
    <div className={classes.itemStyles} name={ItemInfo.name} onClick={onActive}>
      <span>
        <AiFillCaretDown />
        {ItemInfo.title}
      </span>
      <ul className={active === false ? classes.hidden : classes.ulStyles}>
        {ItemInfo.options.map((el, idx) => {
          return <li key={idx}>{el}</li>;
        })}
      </ul>
    </div>
  );
};

const useStyles = makeStyles({
  ulStyles: {
    marginTop: "5px",
    border: "1px solid #bebebe",
    position: "absolute",
    backgroundColor: "#fff",
    visibility: "visible",
    padding: "5px",
    "& li": {
      fontSize: "12px",
      padding: "5px",
      fontWeight: "bold",
    },
  },
  hidden: {
    position: "absolute",
    visibility: "hidden",
  },

  itemStyles: {
    display: "",
    alignItems: "center",
    padding: "14px",
    height: "10px",
    cursor: "pointer",

    "&:hover": {
      color: "#1FCBC7",
    },
  },
});

export default NavSelectItem;
