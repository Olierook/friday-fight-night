import { useStore } from "../context/Store";
import useColorTheme from "./useColorTheme";
import { colors } from "../lib/colors";

const useColor = (string) => {
    const [colorTheme, setColorTheme] = useColorTheme()
    const [{colors1234: {[colorTheme]: colorSet}}, dispatch] = useStore();

    if (string) {
        return colorSet?.[string] || colors[string];
    }
    return colorSet;
}