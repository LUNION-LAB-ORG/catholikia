import { heroui } from "@heroui/react";
export default heroui({
    themes: {
        light: {
            colors: {
                primary: "#FFC107",
                secondary:"#1B2D46",
                background:"#FFFFFF"
            }
        },
        dark: {
            colors: {
                background: "#0C0C0C"
            }
        }
    },
    addCommonColors: true,
    defaultTheme: "light",
});