import { heroui } from "@heroui/react";
export default heroui({
  themes: {
    light: {
      colors: {
        primary: "#FFC107",
        secondary: "#1B2D46",
        background: "#FFFFFF",
      }
    },
    dark: {
      colors: {
        primary: "#FFC107",
        secondary: "#1B2D46",
      }
    }
  },
  addCommonColors: true,
  defaultTheme: "light",
});