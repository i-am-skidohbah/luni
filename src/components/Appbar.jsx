import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Color, DrawerWidth } from "../styles/theme";
import SearchIcon from "@mui/icons-material/Search";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${DrawerWidth}px)`,
        marginLeft: `${DrawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Search = styled("div")(({ open }) => ({
  position: "relative",
  borderRadius: 25,
  backgroundColor: Color.white,
  "&:hover": {
    backgroundColor: `1ps solid ${Color.light}`,
  },

  marginLeft: open ? 0 : 10,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "50ch",
      },
    },
  },
}));

export default function Appbar({ open, handleDrawerOpen }) {
  return (
    <AppBar
      position="fixed"
      open={open}
      // elevation={0}
      backgroundColor={Color.white}
    >
      <Toolbar>
        <IconButton
          color={Color.black}
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            {
              mr: 2,
            },
            open && { display: "none" },
          ]}
        >
          <MenuIcon />
        </IconButton>

        {!open && (
          <Typography
            color={Color.black}
            overflow={`visible`}
            fontWeight="bold"
            variant="h6"
            noWrap
            component="div"
          >
            Admin Dashboard
          </Typography>
        )}
        <Search open={open}>
          <SearchIconWrapper>
            <SearchIcon color={Color.white} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
}
