import { defaultTheme, nightTheme, brightTheme, darkTheme } from "../lib/colors";



export const initialState = {
  isDesktop: false,
  isSmall: true,
  isMedium: false,
  isBig: false,
  colorTheme1234: darkTheme,
  color1234: {
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

