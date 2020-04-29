import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavItem from "./NavItem";
import NavSelectItem from "./NavSelectItem";
import {
  appItems,
  myPageItems,
  customerCenterItems,
} from "./constant/navConstants.js";

import { getCookie, deleteCookie } from "../util/cookie.js";

const Nav = () => {
  const classes = useStyles();

  const [appListData] = useState(appItems);

  const [myPageListData] = useState(myPageItems);

  const [customerCenterListData] = useState(customerCenterItems);

  const [appActive, setAppActive] = useState(false);
  const [myPageActive, setMyPageActive] = useState(false);
  const [centerActive, setCenterActive] = useState(false);

  const judgeToken = getCookie("abc") === undefined ? "로그인" : "로그아웃";

  const [userAccess] = useState(judgeToken);

  const logOutClickHandler = () => {
    deleteCookie("abc");
    window.location.reload();
  };

  const onActiveHandler = (state, setState) => {
    if (state === false) {
      setState(true);
    } else if (state === true) {
      setState(false);
    }
  };

  return (
    <div className={classes.root}>
      <div>
        <NavSelectItem
          ItemInfo={appListData}
          onActive={() => {
            onActiveHandler(appActive, setAppActive);
          }}
          active={appActive}
        />
      </div>

      <div className={classes.navRightStyles}>
        <div className={classes.loginStyles} name="item">
          {userAccess === "로그인" ? (
            <a href="http://54.180.50.220:8080/githubLogin">{userAccess}</a>
          ) : (
            <div
              onClick={() => {
                logOutClickHandler();
              }}
            >
              {userAccess}
            </div>
          )}
        </div>
        <NavItem title="회원가입" />

        <NavSelectItem
          ItemInfo={myPageListData}
          onActive={() => {
            onActiveHandler(myPageActive, setMyPageActive);
          }}
          active={myPageActive}
        />
        <NavSelectItem
          ItemInfo={customerCenterListData}
          onActive={() => {
            onActiveHandler(centerActive, setCenterActive);
          }}
          active={centerActive}
        />

        <NavItem title="새벽배송 지역검색" />
        <NavItem title="이벤트 게시판" />
        <NavItem title="장바구니" />
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "11px",
    paddingLeft: "60px",
    paddingRight: "73px",
    color: "#828282",
    borderBottom: "0.5px solid #bebebe",
    height: "30px",
    "& .arrow_icon": {
      marginRight: "4px",
    },
    "& span": {
      pointerEvents: "none",
    },
    "& .list_item": {
      display: "",
      alignItems: "center",
      padding: "14px",
      height: "10px",
      cursor: "pointer",
      "&:hover": {
        color: "#1FCBC7",
      },
    },
  },
  navRightStyles: {
    display: "flex",
  },
  loginStyles: {
    padding: "14px",
    height: "10px",
    cursor: "pointer",
    "&:hover": {
      color: "#1FCBC7",
    },
  },
});

export default Nav;
