import {
  AlphaTokenShades,
  BaseColorTokens,
  ColorTokenShades,
  FoundationTheme,
  cornerRadius,
  darkComponentColorTokens,
  darkFoundationColorTokens,
  shadows,
  spacing,
} from "@surya-digital/leo-reactjs-material-ui";
import { typographyStyles } from "./typographyStyles";

const primaryTokensShades: ColorTokenShades = {
  100: "#1A0D51",
  200: "#34218A",
  300: "#6D62EB",
  400: "#8F8EFF",
  500: "#B8BCFF",
};

const secondaryTokensShades: ColorTokenShades = {
  100: "#271A00",
  200: "#483200",
  300: "#986F00",
  400: "#C59200",
  500: "#F3C120",
};

const greenTokensShades: ColorTokenShades = {
  100: "#002206",
  200: "#003F11",
  300: "#0B8838",
  400: "#3EAF5A",
  500: "#95DA9F",
};

const blueTokensShades: ColorTokenShades = {
  100: "#001A40",
  200: "#003472",
  300: "#0074E2",
  400: "#3D9DFF",
  500: "#A8D8FF",
};

const orangeTokensShades: ColorTokenShades = {
  100: "#341000",
  200: "#5F2300",
  300: "#C05700",
  400: "#ED7B35",
  500: "#FFBA8F",
};

const redTokensShades: ColorTokenShades = {
  100: "#420001",
  200: "#730005",
  300: "#DB353A",
  400: "#F7706A",
  500: "#FFAAA3",
};

const grayTokensShades: ColorTokenShades & { 600: string } = {
  100: "#191C1F",
  200: "#31363B",
  300: "#41464B",
  400: "#6E7780",
  500: "#929BA5",
  600: "#CED3DA",
};

const whiteTokensShades: AlphaTokenShades = {
  0: "#FFFFFF",
  100: "#FFFFFF0A",
  200: "#FFFFFF1F",
  300: "#FFFFFF66",
};

const blackTokensShades: AlphaTokenShades = {
  0: "#000000",
  100: "#0000000A",
  200: "#0000001F",
  300: "#00000066",
};

export const darkColorTokens: BaseColorTokens = {
  primary: primaryTokensShades,
  secondary: secondaryTokensShades,
  red: redTokensShades,
  blue: blueTokensShades,
  orange: orangeTokensShades,
  gray: grayTokensShades,
  green: greenTokensShades,
  white: whiteTokensShades,
  black: blackTokensShades,
};

export const darkTheme: FoundationTheme = {
  name: "light",
  colorTokens: {
    baseColorTokens: darkColorTokens,
    foundationColorTokens: darkFoundationColorTokens,
    componentColorTokens: darkComponentColorTokens,
  },
  cornerRadius,
  spacing,
  shadow: shadows,
  typography: typographyStyles,
};
