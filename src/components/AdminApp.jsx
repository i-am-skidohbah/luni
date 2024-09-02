import { Box } from "@mui/material";
import { styled, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Color, DrawerWidth } from "../styles/theme";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../../Routes";
import NavDrawer, { DrawerHeader } from "./NavDrawer";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${DrawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  })
);

export default function AdminApp() {
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        background: Color.backgroud,
        height: "100vh",
      }}
    >
      <Router>
        <NavDrawer open={open} setOpen={setOpen} />
        <Main open={open}>
          <DrawerHeader />
          <AppRoutes />
        </Main>
      </Router>
    </Box>
  );
}
