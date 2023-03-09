import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",//pink
  primary: "#7645D9",//yellow #F0B90B //"#7645D9",//purple
  primaryBright: "#53DEE9",// lightblue
  primaryDark: "#0098A1",//darkblue
  secondary: "#7645D9",//purple
  success: "#31D0AA",//green
  warning: "#FFB237",//orange
};

export const additionalColors = {
  binance: "#7645D9",//yellow #F0B90B
  overlay: "#452a7a",//purple
  gold: "#FFC700",//gold
  silver: "#B2B2B2",//silver
  bronze: "#E7974D",//bronze
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#FAF9FA",//lightgray
  backgroundDisabled: "#E9EAEB",//lightgray
  backgroundAlt: "#FFFFFF",//white
  backgroundAlt2: "rgba(255, 255, 255, 0.7)",//white
  cardBorder: "#E7E3EB",//lightgray
  contrast: "#191326",//darkgray
  dropdown: "#F6F6F6",//lightgray
  dropdownDeep: "#EEEEEE",//lightgray
  invertedContrast: "#FFFFFF",//white
  input: "#eeeaf4",//lightpurple
  inputSecondary: "#d7caec",//lightpurple
  tertiary: "#EFF4F5",//lightgray
  text: "#280D5F",//darkblue
  textDisabled: "#BDC2C4",//lightgray
  textSubtle: "#7A6EAA",//lightpurple
  disabled: "#E9EAEB",//lightgray
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",//lightblue
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",//lightblue
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",//lightgray
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",//lightblue
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",//lightpurple
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",//lightpurple
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",//gold
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#ab00fb",//yellow text in darkmode/e500b9/#ab00fb
  background: "#08060B",//darkgray
  backgroundDisabled: "#3c3742",//darkgray
  backgroundAlt: "#000",//black
  backgroundAlt2: "rgba(39, 38, 44, 0.7)",//black
  cardBorder: "#383241",//darkgray
  contrast: "#FFFFFF",//white
  dropdown: "#1E1D20",//darkgray
  dropdownDeep: "#100C18",//darkgray
  invertedContrast: "#191326",//darkgray
  input: "#372F47",//darkgray
  inputSecondary: "#262130",//darkgray
  primaryDark: "#0098A1",//lightblue
  tertiary: "#353547",//darkgray
  text: "#F4EEFF",//white
  textDisabled: "#666171",//darkgray
  textSubtle: "#B8ADD2",//lightpurple
  disabled: "#524B63",//darkgray
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",//darkgray
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",//darkgray
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",//darkgray
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",//darkblue
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",//darkpurple
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",//darkpurple
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",//gold
  },
};
