import React from "react";
import Menu from "@material-ui/core/Menu";

const Menus: React.FC<{
  e: React.MouseEvent<HTMLButtonElement>;
  isOpen: boolean;
  handleClose: () => void;
}> = (props) => {
  return (
    <div>
      {props.e ? (
        <Menu
          id="simple-menu"
          anchorEl={props.e.currentTarget}
          keepMounted={true}
          open={props.isOpen}
          onClose={props.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {props.children}
        </Menu>
      ) : null}
    </div>
  );
};

export default Menus;
