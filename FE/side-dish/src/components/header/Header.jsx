import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100px",
  },
  root: {
    display: "flex",
    alignItems: "center",
    marginLeft: "60px",
    marginRight: "60px",
  },
  inputStyle: {
    marginLeft: "30px",
  },
  searchStyle: {
    color: "#828282",
    "&:hover": {
      color: "#1FCBC7",
    },
  },
  eventTabStyle: {
    display: "flex",
    marginRight: "60px",
    fontWeight: "bold",
    fontSize: "30px",
    color: "#1FCBC7",
    "& div": {
      display: "block",
      margin: "0px 10px 0px 10px",
      cursor: "pointer",
    },
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.root}>
        <div>
          <img
            src="https://web.archive.org/web/20190122062652im_/https://cdn.bmf.kr/web/common/bmc-logo.png"
            alt="전국 넘버원 배달의 반찬"
          />
        </div>

        <div className={classes.inputStyle}>
          <Input />
        </div>
        <div className={classes.searchStyle}>
          <SearchIcon />
        </div>
      </div>

      <div className={classes.eventTabStyle}>
        <div>베스트</div>
        <div>이벤트</div>
      </div>
    </header>
  );
};

export default Header;
