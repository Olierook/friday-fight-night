import { brightTheme, darkTheme, defaultTheme, nightTheme } from "../lib/schemes/colors";



export const initialState = {
    isDesktop: false,
    isSmall: true,
    isMedium: false,
    isBig: false,
    colorTheme1234: "darkTheme",
    colors1234: {
        defaultTheme,
        nightTheme,
        brightTheme,
        darkTheme
    }
};


export const reducer = (state, action) => {
    switch (action.type) {
        case "TEST": {

            return {
                ...initialState
            };
        }
        default:
            return {
                ...initialState, ...action
            };
    }
};

