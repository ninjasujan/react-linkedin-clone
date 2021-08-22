import React, { useState } from "react";
import {
  LinkedIn,
  Search,
  Home,
  PeopleAlt,
  LocalMall,
  MoreHoriz,
} from "@material-ui/icons/";
import Menus from "../Menu/Menu";
import {
  MessageOutlined,
  NotificationsActiveOutlined,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

import { makeStyles, Theme, Badge, IconButton } from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) => {
  return {
    menuBar: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      padding: "5px 0",
      boxShadow: "0px 5px 8px -8px rgba(0, 0, 0, 0.75)",
    },
    linkedInIcon: {
      color: theme.palette.primary.main,
      cursor: "pointer",
    },
    menuIcon: {
      color: theme.palette.primary.light,
      cursor: "pointer",
    },

    menuItem: {
      padding: "0 10px",
      cursor: "pointer",
    },
  };
});

const MenuBar: React.FC<{}> = () => {
  const classes = useStyle();

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [menuTogglerEvent, setMenuTogglerEvent] = useState<any>(null);

  const handleOpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMenuTogglerEvent(e);
    setIsOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setMenuTogglerEvent(null);
    setIsOpenMenu(false);
  };

  return (
    <div className={classes.menuBar}>
      <LinkedIn fontSize="large" className={classes.linkedInIcon} />
      <Search className={classes.menuIcon} fontSize="medium" />
      <Badge
        className={classes.menuIcon}
        overlap="circular"
        color="secondary"
        variant="dot"
      >
        <Home fontSize="medium" />
      </Badge>
      <IconButton className={classes.menuIcon}>
        <PeopleAlt className={classes.menuIcon} fontSize="medium" />
      </IconButton>
      <IconButton>
        <LocalMall className={classes.menuIcon} fontSize="medium" />
      </IconButton>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        className={classes.menuIcon}
        onClick={handleOpenMenu}
      >
        <MoreHoriz fontSize="medium" />
      </IconButton>
      {isOpenMenu ? (
        <Menus
          isOpen={isOpenMenu}
          e={menuTogglerEvent}
          handleClose={handleCloseMenu}
        >
          <div>
            <MenuItem>
              <MessageOutlined className={classes.menuItem} />
            </MenuItem>
            <MenuItem>
              <NotificationsActiveOutlined className={classes.menuItem} />
            </MenuItem>
            <MenuItem>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </MenuItem>
          </div>
        </Menus>
      ) : null}
    </div>
  );
};

export default MenuBar;
