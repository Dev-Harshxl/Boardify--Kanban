import { createTheme } from "@mui/material";

export const colors = [
  "#FF6F61", // Coral
  "#6B5B95", // Purple
  "#88B04B", // Green
  "#F7CAC9", // Pink
  "#92A8D1", // Light Blue
  "#E0E0E0", // Light Gray
];

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212", // Darker background for better contrast
    },
    primary: {
      main: "#FF6F61", // Coral as the primary color
    },
    secondary: {
      main: "#6B5B95", // Purple as the secondary color
    },
  },
  components: {
    MuiIconButton: {
      defaultProps: {
        size: "small",
      },
    },
    MuiSnackbar: {
      defaultProps: {
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        message: {
          fontWeight: 600,
          textTransform: "capitalize",
        },
      },
    },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
    button: {
      textTransform: "unset",
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 0,
  },
});

export default theme;
