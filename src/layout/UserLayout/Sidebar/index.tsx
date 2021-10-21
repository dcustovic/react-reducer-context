import React, { useCallback, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { Link } from "react-router-dom";
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Divider from "@mui/material//Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CodeIcon from "@mui/icons-material/Code";

import clsx from "clsx";
import { UserLayoutProperties } from "..";
import {
  PATH_TO_QUERY,
  PATH_TO_QUERYCLICK,
} from "../../../containers/Router/myRoutes";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      color: "white",
      width: drawerWidth,
      backgroundColor: "#6d9bff",
    },
    drawerClose: {
      color: "white",
      backgroundColor: "#6d9bff",
      overflowX: "hidden",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    sidebarIcons: {
      color: "white",
    },
  })
);

const Sidebar: React.FC<UserLayoutProperties> = ({ handleSidebar, isOpen }) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [selected2, setSelected2] = useState<boolean>(false);

  const classes = useStyles();
  const theme = useTheme();

  const onSelect = useCallback(() => {
    setSelected(!selected);
  }, [selected, setSelected]);

  const onSelect2 = useCallback(() => {
    setSelected2(!selected2);
  }, [selected2, setSelected2]);

  return (
    <Drawer
      style={{ backgroundColor: "red" }}
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: isOpen,
        [classes.drawerClose]: !isOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={() => handleSidebar(isOpen)}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon className={classes.sidebarIcons} />
          ) : (
            <ChevronLeftIcon className={classes.sidebarIcons} />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem
          button
          onClick={onSelect}
          component={Link}
          to={PATH_TO_QUERY}
          style={{
            backgroundColor: selected ? "#2358f9" : "",
          }}
        >
          <ListItemIcon>
            <CodeIcon className={classes.sidebarIcons} />
          </ListItemIcon>
          <ListItemText primary="Query" />
        </ListItem>
        <ListItem
          button
          onClick={onSelect2}
          component={Link}
          to={PATH_TO_QUERYCLICK}
          style={{
            backgroundColor: selected2 ? "#2358f9" : "",
          }}
        >
          <ListItemIcon>
            <FormatListBulletedIcon className={classes.sidebarIcons} />
          </ListItemIcon>
          <ListItemText primary="QueryClick" />
        </ListItem>
      </List>
      <List></List>
    </Drawer>
  );
};

export default Sidebar;
