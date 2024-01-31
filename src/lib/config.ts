import { SiNextdotjs, SiDiscord } from "react-icons/si";

// STYLING
const styles = {
    colors: {
        primary: {
            500: "#7289DA",
            700: "#5064ad",
            800: "#334687",
            900: "#18275e",
            950: "#09112e",
        },
        secondary: {
            100: "#a2c4c9",
            300: "#76a5af",
            700: "#45818e",
            800: "#134f5c",
            900: "#0c343d",
        }
    },
    icons: {
        nextjs: SiNextdotjs,
        discord: SiDiscord
    }
}

// MAIN CONFIG
const configuration = {
    style: styles
}

export default configuration;