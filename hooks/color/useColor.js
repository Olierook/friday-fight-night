import { useStore } from "../../context/Store";
import { colors } from "../../lib/schemes/colors";
import useColorTheme from "./useColorTheme";

const useColor = (string) => {
    const [colorTheme] = useColorTheme();
    const [{ colors1234: { [colorTheme]: colorSet } }] = useStore();

    if (string) {
        return colorSet?.[string] || colors[string];
    }
    return colorSet;
};

export default useColor;