import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

import SignOutButton from "./../../../components//SignOutButton";
import { useUserContext } from "../../../containers/UserProvider/context";

//
export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { username } = useUserContext();

  const isMenuOpen = Boolean(anchorEl);

  // functions
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem button={false}>
        {username && (
          <span>
            Welcome <strong style={{ color: "#782fde" }}>{username}</strong>!
          </span>
        )}
      </MenuItem>
      <SignOutButton />
    </Menu>
  );

  return (
    <div>
      <IconButton
        edge="end"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color={"inherit"}
      >
        <AccountCircle />
      </IconButton>
      {renderMenu}
    </div>
  );
}
