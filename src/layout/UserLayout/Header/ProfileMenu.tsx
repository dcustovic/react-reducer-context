import React, { useState } from "react";

import { makeStyles } from "@mui/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton, Menu, MenuItem, Theme } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import SignOutButton from "./../../../components//SignOutButton";
import { useUserContext } from "../../../containers/UserProvider/context";

// for some reason this is not working ever since I used
// the same makeStyles() logic in Header component
const useStyles = makeStyles((theme: Theme) => ({
  profileIcon: {
    backgroundColor: "inherit",
    "&:hover": {
      backgroundColor: "rgb(169, 130, 209, 0.6)",
    },
  },
}));

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const { username } = useUserContext();
  const classes = useStyles();

  // handle
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  // handle
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        className={classes.profileIcon}
        color="inherit"
        edge="end"
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
      >
        <AccountCircleIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem dense selected={false}>
          {username && (
            <>
              <AccountCircleOutlinedIcon style={{ marginRight: ".7rem" }} />
              <span>
                Welcome <strong style={{ color: "#782fde" }}>{username}</strong>
              </span>
            </>
          )}
        </MenuItem>
        <SignOutButton />
      </Menu>
    </div>
  );
}
