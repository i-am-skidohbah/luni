import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Color, DrawerWidth } from "../styles/theme";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import GroupIcon from "@mui/icons-material/Groups";
import SettingIcon from "@mui/icons-material/Settings";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";

import Appbar from "./Appbar";
import { useState } from "react";
import { Typography } from "@mui/material";

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 5),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const MyListIttemButton = ({
  text,
  icon,
  handleNavDrawerClicked,
  selected,
}) => {
  return (
    <ListItem key={text} disablePadding>
      <ListItemButton
        onClick={() => handleNavDrawerClicked(text)}
        sx={{
          ...(selected && {
            background: Color.white,
            borderRadius: 2,
            fontWeight: "bold",
            color: Color.black,
          }),
        }}
      >
        <ListItemIcon sx={{ color: selected && Color.sucess }}>
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default function NavDrawer({ open, setOpen }) {
  const [seletedItem, setSeleitem] = useState("");
  const navigate = useNavigate();
  const handleNavDrawerClicked = (item) => {
    setSeleitem(item);
    navigate(item);
  };

  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Appbar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        sx={{
          width: DrawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DrawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          {open && (
            <Typography
              color={Color.black}
              fontWeight="bold"
              variant="h6"
              noWrap
              component="div"
            >
              Admin Dashboard
            </Typography>
          )}

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />
        <List>
          <ListItem disablePadding>
            <MyListIttemButton
              text={`Dashboard`}
              handleNavDrawerClicked={handleNavDrawerClicked}
              icon={<DashboardIcon />}
              selected={seletedItem.includes("Dashboard")}
            />
          </ListItem>

          <ListItem disablePadding>
            <MyListIttemButton
              text={`Products`}
              handleNavDrawerClicked={handleNavDrawerClicked}
              icon={<ReceiptIcon />}
              selected={seletedItem.includes("Products")}
            />
          </ListItem>
          <ListItem disablePadding>
            <MyListIttemButton
              text={`Message`}
              handleNavDrawerClicked={handleNavDrawerClicked}
              icon={<MailIcon />}
              selected={seletedItem.includes("Message")}
            />
          </ListItem>
          <ListItem disablePadding>
            <MyListIttemButton
              text={`Settings`}
              handleNavDrawerClicked={handleNavDrawerClicked}
              icon={<SettingIcon />}
              selected={seletedItem.includes("Settings")}
            />
          </ListItem>
          <ListItem disablePadding>
            <MyListIttemButton
              text={`Customers`}
              handleNavDrawerClicked={handleNavDrawerClicked}
              icon={<GroupIcon />}
              selected={seletedItem.includes("Customers")}
            />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
