import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    subtitle1: {
      textTransform: "uppercase",
      fontSize: "1.24rem",
      fontWeight: "bold",
      letterSpacing: "7px",
      color: "#CECEC5",
      fontFamily:
        "'Avenir Next', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif",
    },
    subtitle2: {
      fontWeight: 400,
      color: "#5F646C",
      fontSize: "4.56rem",
      lineHeight: 0.9,
      fontFamily:
        "Baskerville, 'Baskerville Old Face', 'Hoefler Text', Garamond, 'Times New Roman', serif",
    },
    body1: {
      fontStyle: "italic",
      fontSize: "1.625rem",
      color: "#9D9C95",
      textAlign: "left",
      lineHeight: 1.5,
      fontFamily:
        "'Avenir Next', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif",
    },
    body2: {
      fontSize: "1.19rem",
      fontFamily:
        "'Avenir Next', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif",
      color: "#5D5C56",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "p",
          body2: "p",
        },
      },
    },
    MuiImageListItemBar: {
      styleOverrides: {
        titleWrap: {
          padding: "10px 0",
        },
        title: {
          whiteSpace: "initial",
          fontSize: "1.06rem",
          fontStyle: "italic",
          color: "#5F646C",
          textAlign: "center",
          padding: "1.06rem 1.56rem 0px",
        },
      },
    },
  },
});
