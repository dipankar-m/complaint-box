import {
  AlphaTokenShades,
  BaseColorTokens,
  ColorTokenShades,
  FoundationTheme,
  cornerRadius,
  lightComponentColorTokens,
  lightFoundationColorTokens,
  shadows,
  spacing,
} from "@surya-digital/leo-reactjs-material-ui";
import { typographyStyles } from "./typographyStyles";

const primaryTokensShades: ColorTokenShades = {
  100: "#EDEEFF",
  200: "#CCCFFF",
  300: "#7F79F8",
  400: "#6252DE",
  500: "#3F2CA3",
};

const secondaryTokensShades: ColorTokenShades = {
  100: "#FFF19F",
  200: "#FFCC27",
  300: "#B08100",
  400: "#886200",
  500: "#573E00",
};

const greenTokensShades: ColorTokenShades = {
  100: "#DFF4E1",
  200: "#A6E1AE",
  300: "#249D48",
  400: "#00792F",
  500: "#004D18",
};

const blueTokensShades: ColorTokenShades = {
  100: "#DFF1FF",
  200: "#A6D8FF",
  300: "#1D88FC",
  400: "#0067CD",
  500: "#00408A",
};

const orangeTokensShades: ColorTokenShades = {
  100: "#FFEBDF",
  200: "#FFC7A4",
  300: "#D9691B",
  400: "#AD4B00",
  500: "#732C00",
};

const redTokensShades: ColorTokenShades = {
  100: "#FFEBE9",
  200: "#FFC4BF",
  300: "#EC5553",
  400: "#CC1E2C",
  500: "#8A000B",
};

const grayTokensShades: ColorTokenShades & { 600: string } = {
  100: "#F4F6F9",
  200: "#CED3DA",
  300: "#BEC2C9",
  400: "#818A93",
  500: "#626972",
  600: "#3D4349",
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

export const lightColorTokens: BaseColorTokens = {
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

export const lightTheme: FoundationTheme = {
  name: "light",
  colorTokens: {
    baseColorTokens: lightColorTokens,
    foundationColorTokens: lightFoundationColorTokens,
    componentColorTokens: lightComponentColorTokens,
  },
  cornerRadius,
  spacing,
  shadow: shadows,
  typography: typographyStyles,
};

interface DataVisualizationColorTokens {
  one: string;
  two: string;
  three: string;
  four: string;
}

export function useDataVisualizationPalette(): DataVisualizationColorTokens {
  return { one: "#53B2AD", two: "#4146C3", three: "#E78B37", four: "#CD4A81" };
}
