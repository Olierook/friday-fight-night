import { useStoreValue } from "../data/useStoreValue";

const useColorTheme = () => {
    const [colorTheme, setColorTheme] = useStoreValue("colorTheme1234");
    const [color] = useStoreValue("colors1234");
    const options = Object.keys(color);

    const updateColorTheme = (c) => {
        if (options.includes(c)) {
            setColorTheme(c);
        } else {
            setColorTheme("defaultTheme");
        }
    };

    return [colorTheme, updateColorTheme];
};


export default useColorTheme;