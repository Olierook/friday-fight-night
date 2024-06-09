import { useStore } from "../context/Store";
import useColorTheme from "./useColorTheme";
import { colors } from "../lib/colors";

const useColor = (string) => {
    const [colorTheme] = useColorTheme();
    console.log({colorTheme});
    const [{colors1234: {[colorTheme]: colorSet}}] = useStore();
    console.log({colorSet});

    if (string) {
        return colorSet?.[string] || colors[string];
    }
    return colorSet;
};

export default useColor;