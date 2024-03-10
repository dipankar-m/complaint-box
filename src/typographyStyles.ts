import { Typography } from "@surya-digital/leo-reactjs-material-ui";

/**
 * Function to convert px to rem
 */
export function pxToRem(value: number): string {
  return `${value / 16}rem`;
}

const PRIMARY_FONT = "Lato";

const h1 = {
  fontWeight: 700,
  lineHeight: "132px",
  letterSpacing: "-1.5px",
  fontFamily: PRIMARY_FONT,
  fontSize: "96px",
};

const h2 = {
  fontWeight: 700,
  lineHeight: "84px",
  letterSpacing: "-1px",
  fontFamily: PRIMARY_FONT,
  fontSize: "60px",
};

const h3 = {
  fontWeight: 700,
  lineHeight: "64px",
  letterSpacing: "-0.5px",
  fontFamily: PRIMARY_FONT,
  fontSize: "48px",
};

const h4 = {
  fontWeight: 700,
  lineHeight: "48px",
  letterSpacing: "0px",
  fontFamily: PRIMARY_FONT,
  fontSize: "34px",
};

const h5 = {
  fontWeight: 700,
  lineHeight: "32px",
  letterSpacing: "0.25px",
  fontFamily: PRIMARY_FONT,
  fontSize: "24px",
};

const h6 = {
  fontWeight: 700,
  lineHeight: "24px",
  letterSpacing: "0.5px",
  fontFamily: PRIMARY_FONT,
  fontSize: "16px",
};

const sh1 = {
  fontWeight: 700,
  lineHeight: "32px",
  letterSpacing: "0px",
  fontFamily: PRIMARY_FONT,
  fontSize: "22px",
};

const sh2 = {
  fontWeight: 700,
  lineHeight: "28px",
  letterSpacing: "0.03px",
  fontFamily: PRIMARY_FONT,
  fontSize: "18px",
};

const sh3 = {
  fontWeight: 700,
  lineHeight: "24px",
  letterSpacing: "0.05px",
  fontFamily: PRIMARY_FONT,
  fontSize: "16px",
};

const sh4 = {
  fontWeight: 700,
  lineHeight: "20px",
  letterSpacing: "0.1px",
  fontFamily: PRIMARY_FONT,
  fontSize: "14px",
};

const b1 = {
  fontWeight: 400,
  lineHeight: "24px",
  letterSpacing: "0.2px",
  fontFamily: PRIMARY_FONT,
  fontSize: "16px",
};

const b2 = {
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: "0.22px",
  fontFamily: PRIMARY_FONT,
  fontSize: "14px",
};

const b3 = {
  fontWeight: 400,
  lineHeight: "16px",
  letterSpacing: "0.25px",
  fontFamily: PRIMARY_FONT,
  fontSize: "12px",
};

const b4 = {
  fontWeight: 400,
  lineHeight: "12px",
  letterSpacing: "0.3px",
  fontFamily: PRIMARY_FONT,
  fontSize: "10px",
};

const s1 = {
  fontWeight: 700,
  lineHeight: "24px",
  letterSpacing: "0.2px",
  fontFamily: PRIMARY_FONT,
  fontSize: "16px",
};

const s2 = {
  fontWeight: 700,
  lineHeight: "20px",
  letterSpacing: "0.22px",
  fontFamily: PRIMARY_FONT,
  fontSize: "14px",
};

const s3 = {
  fontWeight: 700,
  lineHeight: "16px",
  letterSpacing: "0.25px",
  fontFamily: PRIMARY_FONT,
  fontSize: "12px",
};

const s4 = {
  fontWeight: 700,
  lineHeight: "12px",
  letterSpacing: "0.3px",
  fontFamily: PRIMARY_FONT,
  fontSize: "10px",
};

const c1 = {
  fontWeight: 400,
  lineHeight: "16px",
  letterSpacing: "0.3px",
  fontFamily: PRIMARY_FONT,
  fontSize: "12px",
};

const c2 = {
  fontWeight: 400,
  lineHeight: "12px",
  letterSpacing: "0.35px",
  fontFamily: PRIMARY_FONT,
  fontSize: "10px",
};

const ol1 = {
  fontWeight: 700,
  lineHeight: "16px",
  letterSpacing: "2px",
  fontFamily: PRIMARY_FONT,
  fontSize: "12px",
};

const ol2 = {
  fontWeight: 700,
  lineHeight: "12px",
  letterSpacing: "2.5px",
  fontFamily: PRIMARY_FONT,
  fontSize: "10px",
};

const bt1 = {
  fontWeight: 700,
  lineHeight: "24px",
  letterSpacing: "0.3px",
  fontFamily: PRIMARY_FONT,
  fontSize: "16px",
};

const bt2 = {
  fontWeight: 700,
  lineHeight: "20px",
  letterSpacing: "0.32px",
  fontFamily: PRIMARY_FONT,
  fontSize: "14px",
};

const bt3 = {
  fontWeight: 700,
  lineHeight: "16px",
  letterSpacing: "0.35px",
  fontFamily: PRIMARY_FONT,
  fontSize: "12px",
};

export const typographyStyles: Typography = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  sh1,
  sh2,
  sh3,
  sh4,
  b1,
  b2,
  b3,
  b4,
  s1,
  s2,
  s3,
  s4,
  c1,
  c2,
  ol1,
  ol2,
  bt1,
  bt2,
  bt3,
};
