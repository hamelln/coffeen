import { DefaultTheme } from "styled-components";

export interface ITheme extends DefaultTheme {
  fontSizes: {
    [K: string]: string;
  };
  breakpoints: {
    [K: string]: string;
  };
  bigFonts: {
    [K: string]: string;
  };
}

export const theme: ITheme = {
  colors: {
    primary: "#964B00",
    secondary: "#0070f3",
  },

  breakpoints: {
    xs: "320px",
    s: "740px",
    m: "1024px",
    l: "1200px",
  },

  bigFonts: {
    xs: "30px",
    s: "40px",
    m: "56px",
    l: "74px",
    xl: "80px",
  },

  fontSizes: {
    xs: "12px",
    s: "14px",
    m: "16px",
    l: "18px",
    xl: "20px",
    xxl: "24px",
  },
};
