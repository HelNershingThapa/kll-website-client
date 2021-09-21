import { createTheme, responsiveFontSizes } from "@material-ui/core";

// colors
export const primary = "#185ADB";
const secondary = "#252525";
const black = "#2a2a2a";
const darkBlack = "rgb(36, 40, 44)";
const background = "#fff";
const warningLight = "rgba(253, 200, 69, .3)";
const warningMain = "rgba(253, 200, 69, .5)";
const warningDark = "rgba(253, 200, 69, .7)";

// border
const borderWidth = 1;
const borderColor = "rgba(0, 0, 0, 0.13)";

// breakpoints
const xl = 1920;
const lg = 1440;
const md = 960;
const sm = 600;
const xs = 0;

// spacing
const spacing = 4;

const theme = createTheme({
  palette: {
    primary: { main: primary },
    secondary: { main: secondary },
    common: {
      black,
      darkBlack,
    },
    warning: {
      light: warningLight,
      main: warningMain,
      dark: warningDark,
    },
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    background: {
      default: background,
    },
    grey: {
      50: "#F8FAFC",
      100: "#F0F5F9",
      200: "#E1E8F0",
      300: "#CAD5E0",
      400: "#91A4B7",
      500: "#61758A",
      600: "#445668",
      700: "#304254",
      800: "#1C2A3A",
      900: "#0D1829",
    },
  },
  spacing,
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    values: {
      xl,
      lg,
      md,
      sm,
      xs,
    },
  },
  border: {
    borderColor: borderColor,
    borderWidth: borderWidth,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        padding: "16px 32px",
      },
      outlined: {
        borderColor: "#CAD5E0",
        padding: "16px 32px",
      },
      label: {
        fontSize: "16px",
        lineHeight: "16px",
      },
    },
    MuiChip: {
      root: {
        paddingLeft:0,
        paddingRight: 0,
        padding: "6px 12px",
        borderRadius: "8px",
      },
      label: {
        fontSize: "14px",
        fontWeight: 500,
        color: '#F8FAFC',
        padding: 0,
        margin: 0,
      }
    },
    MuiExpansionPanel: {
      root: {
        position: "static",
      },
    },
    MuiTableCell: {
      root: {
        paddingLeft: spacing * 2,
        paddingRight: spacing * 2,
        borderBottom: `${borderWidth}px solid ${borderColor}`,
        [`@media (max-width:  ${sm}px)`]: {
          paddingLeft: spacing,
          paddingRight: spacing,
        },
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: borderColor,
        height: borderWidth,
      },
    },
    MuiPrivateNotchedOutline: {
      root: {
        borderWidth: borderWidth,
      },
    },
    MuiListItem: {
      divider: {
        borderBottom: `${borderWidth}px solid ${borderColor}`,
      },
    },
    MuiDialog: {
      paper: {
        width: "100%",
        maxWidth: 430,
        marginLeft: spacing,
        marginRight: spacing,
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: darkBlack,
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        [`@media (max-width:  ${sm}px)`]: {
          paddingLeft: spacing,
          paddingRight: spacing,
        },
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: '#0D18294D'
      }
    }
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
  },
  typography: {
    // htmlFontSize: 18,
    fontFamily: "Inter",
    useNextVariants: true,
    fontSize: 18,
    button: {
      fontSize: "0.89rem",
    },
    h1: {
      // color: 'rgba(255,255,255)',
      fontSize: "3.75rem",
      fontWeight: "700",
      lineHeight: "4rem",
    },
    h2: {
      // color: 'rgba(255,255,255)',
      fontSize: "2.67rem",
      fontWeight: "700",
      lineHeight: 1.125,
    },
    h3: {
      // color: 'rgba(255,255,255)',
      fontSize: "2.22rem",
      fontWeight: "700",
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: 'Manrope',
      fontSize: "1.78rem",
      fontWeight: "700",
      lineHeight: 1.25,
    },
    h5: {
      fontFamily: 'Manrope',
      fontSize: "1.33rem",
      fontWeight: "700",
      lineHeight: 1.33,
    },
    h6: {
      fontSize: "1.1rem",
      fontWeight: "700",
      lineHeight: "4rem",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: "400",
      lineHeight: "1.56rem",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: "400",
      lineHeight: "1.56rem",
    },
    // small - 14px
    subtitle2: {
      fontSize: "0.78rem",
      fontWeight: "400",
      lineHeight: "1.1rem",
    },
    // default for unspecified typography
    body2: {
      fontSize: "1rem",
      fontWeight: "400",
      lineHeight: "1.56rem",
    },
    caption: {
      fontSize: "0.72rem",
      fontWeight: "400",
      lineHeight: "1rem",
    },
  },
});

export default theme;
