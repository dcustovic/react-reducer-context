import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

import SignOutButton from "./../../../components//SignOutButton";
import { useUserContext } from "../../../containers/UserProvider/context";

//
export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const { username } = useUserContext();

  // functions
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        color="inherit"
        edge="end"
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
      >
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem button={false}>
          {username && (
            <span>
              Welcome <strong style={{ color: "#782fde" }}>{username}</strong>
            </span>
          )}
        </MenuItem>
        <SignOutButton />
      </Menu>
    </div>
  );
}
