import { colors } from "@mui/material";
import createTheme from "@mui/material/styles/createTheme";

export const DrawerWidth = 250;

// colors

export const Color = {
  primary: "#f06292",
  secondary: "#ba68c8",
  sucess: "#4caf50",
  danger: "#aff5722",
  warning: "#ffc107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "",
  border: "",
  Inverse: "",
  shaft: "",
  transparent: "#00000000",

  //   grey
  ///////////////
  /////////////
  ////////////
  backgroud: "#f5f5f5",
  dim_grey: "#6969696",
  dove_grey: "#d5d5d5",
  body_bg: "#f3f6f9",
  light_gray: "rgb(230,230,230)",
  // ///////////////
  // solid colors
  /////////////
  white: "#aaa",
  black: "#000",
};

//  css utilis

export const CssUtils = {
  boxShadow: "rgba(149,157,165,0.2) 0px 8px 24px",
};
//  creating theme

const theme = createTheme({
  palette: {
    primary: {
      main: Color.primary,
    },
    secondary: {
      main: Color.secondary,
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: { background: Color.transparent },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: DrawerWidth,
          background: Color.transparent,
          color: Color.light,
        },
      },
    },
  },
});
export default theme;
