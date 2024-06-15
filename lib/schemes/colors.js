

export const colors =
  {
      ffnPrimary: "#003919",
      ffnSecondary: "#b7ccb7",
      ffnTertiary: "#204d56",
      ffnNeutral: "#91918E",
      black: "#000000",       // White text
      white: "#ffffff",       // Black text
      lightgrey: "#D3D3D3",   // Black text
      mediumgrey: "#878683",  // Black text
      darkgrey: "#333333",    // White text
      red: "#F44336",         // White text
      crimson: "#B22222",     // White text
      pink: "#E91E63",        // White text
      purple: "#9C27B0",      // White text
      indigo: "#3F51B5",      // White text
      blue: "#03A9F4",        // White text
      cyan: "#00BCD4",        // Black text
      teal: "#009688",        // White text
      green: "#8BC34A",       // Black text
      darkgreen: "#558B2F",   // White text
      lime: "#CDDC39",        // Black text
      yellow: "#FFEB3B",      // Black text
      orange: "#FDB515",      // Black text
      burntorange: "#CC5500", // White text
      deeporange: "#FF5722",  // White text
      brown: "#795548",       // White text
      skyblue: "#87CEEB",     // Black text
      olive: "#808000",       // White text
      coral: "#FF7F50",       // Black text
      gold: "#FFD700",        // Black text
      darkblue: "#0D47A1",    // White text
      lightgreen: "#C5E1A5"   // Black text
  };

const {
    ffnNeutral,
    ffnPrimary,
    ffnSecondary,
    ffnTertiary,
    black,
    white,
    lightgrey,
    mediumgrey,
    darkgrey,
    red,
    crimson,
    pink,
    purple,
    indigo,
    blue,
    darkblue,
    cyan,
    teal,
    green,
    darkgreen,
    lime,
    yellow,
    orange,
    burntorange,
    deeporange,
    brown,
    skyblue,
    olive,
    coral,
    gold,
    lightgreen
} = colors;

export const defaultTheme = {
    primary: darkgreen, // #558B2F
    primaryText: white,
    primaryTextDimmed: lightgrey,
    primaryLight: green, // #8BC34A
    primaryLightText: black,
    primaryLightTextDimmed: mediumgrey,
    primaryDark: olive, // #808000
    primaryDarkText: white,
    primaryDarkTextDimmed: lightgrey,
        
    secondary: crimson, // #B22222
    secondaryText: white,
    secondaryTextDimmed: lightgrey,
    secondaryLight: pink, // #E91E63
    secondaryLightText: black,
    secondaryLightTextDimmed: mediumgrey,
    secondaryDark: red, // #F44336
    secondaryDarkText: white,
    secondaryDarkTextDimmed: lightgrey,
      
    tertiary: teal, // #009688
    tertiaryText: white,
    tertiaryTextDimmed: lightgrey,
    tertiaryLight: cyan, // #00BCD4
    tertiaryLightText: black,
    tertiaryLightTextDimmed: mediumgrey,
    tertiaryDark: darkblue, // #0D47A1
    tertiaryDarkText: white,
    tertiaryDarkTextDimmed: lightgrey,
      
    cta: orange, // #FDB515
    ctaText: black,
    ctaTextDimmed: mediumgrey,
    ctaLight: yellow, // #FFEB3B
    ctaLightText: black,
    ctaLightTextDimmed: mediumgrey,
    ctaDark: burntorange, // #CC5500
    ctaDarkText: white,
    ctaDarkTextDimmed: lightgrey,
      
    highlight: yellow, // #FFEB3B
    highlightText: black,
    highlightTextDimmed: mediumgrey,
    highlightLight: lightgrey, // #D3D3D3
    highlightLightText: black,
    highlightLightTextDimmed: mediumgrey,
    highlightDark: gold, // #FFD700
    highlightDarkText: black,
    highlightDarkTextDimmed: lightgrey,
      
    good: green, // #8BC34A
    goodText: black,
    goodTextDimmed: mediumgrey,
    goodLight: lime, // #CDDC39
    goodLightText: black,
    goodLightTextDimmed: mediumgrey,
    goodDark: darkgreen, // #558B2F
    goodDarkText: white,
      
    warning: deeporange, // #FF5722
    warningText: white,
    warningTextDimmed: mediumgrey,
    warningLight: coral, // #FF7F50
    warningLightText: black,
    warningLightTextDimmed: mediumgrey,
    warningDark: burntorange, // #CC5500
    warningDarkText: white,
    warningDarkTextDimmed: lightgrey,
      
    error: red, // #F44336
    errorText: white,
    errorTextDimmed: mediumgrey,
    errorLight: pink, // #E91E63
    errorLightText: black,
    errorLightTextDimmed: mediumgrey,
    errorDark: crimson, // #B22222
    errorDarkText: white,
    errorDarkTextDimmed: lightgrey,
      
    info: skyblue, // #87CEEB
    infoText: black,
    infoTextDimmed: mediumgrey,
    infoLight: cyan, // #00BCD4
    infoLightText: black,
    infoLightTextDimmed: mediumgrey,
    infoDark: blue, // #03A9F4
    infoDarkText: white,
      
    background: mediumgrey,
    backgroundText: black,
    backgroundTextDimmed: mediumgrey,
    backgroundLight: lightgrey,
    backgroundLightText: black,
    backgroundLightTextDimmed: mediumgrey,
    backgroundDark: darkgrey,
    backgroundDarkText: white,
    backgroundDarkTextDimmed: lightgrey
};

export const nightTheme = {
    primary: darkgreen, // #558B2F
    primaryText: white,
    primaryTextDimmed: lightgrey,
    primaryLight: green, // #8BC34A
    primaryLightText: black,
    primaryLightTextDimmed: mediumgrey,
    primaryDark: olive, // #808000
    primaryDarkText: white,
    primaryDarkTextDimmed: lightgrey,
        
    secondary: crimson, // #B22222
    secondaryText: white,
    secondaryTextDimmed: lightgrey,
    secondaryLight: pink, // #E91E63
    secondaryLightText: black,
    secondaryLightTextDimmed: mediumgrey,
    secondaryDark: red, // #F44336
    secondaryDarkText: white,
    secondaryDarkTextDimmed: lightgrey,
      
    tertiary: teal, // #009688
    tertiaryText: white,
    tertiaryTextDimmed: lightgrey,
    tertiaryLight: cyan, // #00BCD4
    tertiaryLightText: black,
    tertiaryLightTextDimmed: mediumgrey,
    tertiaryDark: darkblue, // #0D47A1
    tertiaryDarkText: white,
    tertiaryDarkTextDimmed: lightgrey,
      
    cta: orange, // #FDB515
    ctaText: black,
    ctaTextDimmed: mediumgrey,
    ctaLight: yellow, // #FFEB3B
    ctaLightText: black,
    ctaLightTextDimmed: mediumgrey,
    ctaDark: burntorange, // #CC5500
    ctaDarkText: white,
    ctaDarkTextDimmed: lightgrey,
      
    highlight: yellow, // #FFEB3B
    highlightText: black,
    highlightTextDimmed: mediumgrey,
    highlightLight: lightgrey, // #D3D3D3
    highlightLightText: black,
    highlightLightTextDimmed: mediumgrey,
    highlightDark: gold, // #FFD700
    highlightDarkText: black,
    highlightDarkTextDimmed: lightgrey,
      
    good: green, // #8BC34A
    goodText: black,
    goodTextDimmed: mediumgrey,
    goodLight: lime, // #CDDC39
    goodLightText: black,
    goodLightTextDimmed: mediumgrey,
    goodDark: darkgreen, // #558B2F
    goodDarkText: white,
      
    warning: deeporange, // #FF5722
    warningText: white,
    warningTextDimmed: mediumgrey,
    warningLight: coral, // #FF7F50
    warningLightText: black,
    warningLightTextDimmed: mediumgrey,
    warningDark: burntorange, // #CC5500
    warningDarkText: white,
    warningDarkTextDimmed: lightgrey,
      
    error: red, // #F44336
    errorText: white,
    errorTextDimmed: mediumgrey,
    errorLight: pink, // #E91E63
    errorLightText: black,
    errorLightTextDimmed: mediumgrey,
    errorDark: crimson, // #B22222
    errorDarkText: white,
    errorDarkTextDimmed: lightgrey,
      
    info: skyblue, // #87CEEB
    infoText: black,
    infoTextDimmed: mediumgrey,
    infoLight: cyan, // #00BCD4
    infoLightText: black,
    infoLightTextDimmed: mediumgrey,
    infoDark: blue, // #03A9F4
    infoDarkText: white,
      
    background: darkgrey,
    backgroundText: white,
    backgroundTextDimmed: lightgrey,
    backgroundLight: mediumgrey,
    backgroundLightText: white,
    backgroundLightTextDimmed: lightgrey,
    backgroundDark: black,
    backgroundDarkText: white,
    backgroundDarkTextDimmed: lightgrey
};
      
export const brightTheme = {
    primary: darkgreen, // #558B2F
    primaryText: white,
    primaryTextDimmed: lightgrey,
    primaryLight: green, // #8BC34A
    primaryLightText: black,
    primaryLightTextDimmed: mediumgrey,
    primaryDark: olive, // #808000
    primaryDarkText: white,
    primaryDarkTextDimmed: lightgrey,
        
    secondary: crimson, // #B22222
    secondaryText: white,
    secondaryTextDimmed: lightgrey,
    secondaryLight: pink, // #E91E63
    secondaryLightText: black,
    secondaryLightTextDimmed: mediumgrey,
    secondaryDark: red, // #F44336
    secondaryDarkText: white,
    secondaryDarkTextDimmed: lightgrey,
      
    tertiary: teal, // #009688
    tertiaryText: white,
    tertiaryTextDimmed: lightgrey,
    tertiaryLight: cyan, // #00BCD4
    tertiaryLightText: black,
    tertiaryLightTextDimmed: mediumgrey,
    tertiaryDark: darkblue, // #0D47A1
    tertiaryDarkText: white,
    tertiaryDarkTextDimmed: lightgrey,
      
    cta: orange, // #FDB515
    ctaText: black,
    ctaTextDimmed: mediumgrey,
    ctaLight: yellow, // #FFEB3B
    ctaLightText: black,
    ctaLightTextDimmed: mediumgrey,
    ctaDark: burntorange, // #CC5500
    ctaDarkText: white,
    ctaDarkTextDimmed: lightgrey,
      
    highlight: yellow, // #FFEB3B
    highlightText: black,
    highlightTextDimmed: mediumgrey,
    highlightLight: lightgrey, // #D3D3D3
    highlightLightText: black,
    highlightLightTextDimmed: mediumgrey,
    highlightDark: gold, // #FFD700
    highlightDarkText: black,
    highlightDarkTextDimmed: lightgrey,
      
    good: green, // #8BC34A
    goodText: black,
    goodTextDimmed: mediumgrey,
    goodLight: lime, // #CDDC39
    goodLightText: black,
    goodLightTextDimmed: mediumgrey,
    goodDark: darkgreen, // #558B2F
    goodDarkText: white,
      
    warning: deeporange, // #FF5722
    warningText: white,
    warningTextDimmed: mediumgrey,
    warningLight: coral, // #FF7F50
    warningLightText: black,
    warningLightTextDimmed: mediumgrey,
    warningDark: burntorange, // #CC5500
    warningDarkText: white,
    warningDarkTextDimmed: lightgrey,
      
    error: red, // #F44336
    errorText: white,
    errorTextDimmed: mediumgrey,
    errorLight: pink, // #E91E63
    errorLightText: black,
    errorLightTextDimmed: mediumgrey,
    errorDark: crimson, // #B22222
    errorDarkText: white,
    errorDarkTextDimmed: lightgrey,
      
    info: skyblue, // #87CEEB
    infoText: black,
    infoTextDimmed: mediumgrey,
    infoLight: cyan, // #00BCD4
    infoLightText: black,
    infoLightTextDimmed: mediumgrey,
    infoDark: blue, // #03A9F4
    infoDarkText: white,
      
    background: white,
    backgroundText: black,
    backgroundTextDimmed: mediumgrey,
    backgroundLight: lightgrey,
    backgroundLightText: black,
    backgroundLightTextDimmed: mediumgrey,
    backgroundDark: darkgrey,
    backgroundDarkText: white,
    backgroundDarkTextDimmed: lightgrey
};

export const darkTheme = {
    primary: ffnPrimary, 
    primaryText: ffnNeutral,
    primaryTextDimmed: lightgrey,
    primaryLight: green,
    primaryLightText: black,
    primaryLightTextDimmed: mediumgrey,
    primaryDark: olive, 
    primaryDarkText: white,
    primaryDarkTextDimmed: lightgrey,
        
    secondary: ffnSecondary, // #B22222
    secondaryText: black,
    secondaryTextDimmed: lightgrey,
    secondaryLight: pink, // #E91E63
    secondaryLightText: black,
    secondaryLightTextDimmed: mediumgrey,
    secondaryDark: red, // #F44336
    secondaryDarkText: white,
    secondaryDarkTextDimmed: lightgrey,
      
    tertiary: ffnTertiary, // #009688
    tertiaryText: white,
    tertiaryTextDimmed: lightgrey,
    tertiaryLight: cyan, // #00BCD4
    tertiaryLightText: black,
    tertiaryLightTextDimmed: mediumgrey,
    tertiaryDark: darkblue, // #0D47A1
    tertiaryDarkText: white,
    tertiaryDarkTextDimmed: lightgrey,
      
    cta: orange, // #FDB515
    ctaText: black,
    ctaTextDimmed: mediumgrey,
    ctaLight: yellow, // #FFEB3B
    ctaLightText: black,
    ctaLightTextDimmed: mediumgrey,
    ctaDark: burntorange, // #CC5500
    ctaDarkText: white,
    ctaDarkTextDimmed: lightgrey,
      
    highlight: yellow, // #FFEB3B
    highlightText: black,
    highlightTextDimmed: mediumgrey,
    highlightLight: lightgrey, // #D3D3D3
    highlightLightText: black,
    highlightLightTextDimmed: mediumgrey,
    highlightDark: gold, // #FFD700
    highlightDarkText: black,
    highlightDarkTextDimmed: lightgrey,
      
    good: green, // #8BC34A
    goodText: black,
    goodTextDimmed: mediumgrey,
    goodLight: lime, // #CDDC39
    goodLightText: black,
    goodLightTextDimmed: mediumgrey,
    goodDark: darkgreen, // #558B2F
    goodDarkText: white,
      
    warning: deeporange, // #FF5722
    warningText: white,
    warningTextDimmed: mediumgrey,
    warningLight: coral, // #FF7F50
    warningLightText: black,
    warningLightTextDimmed: mediumgrey,
    warningDark: burntorange, // #CC5500
    warningDarkText: white,
    warningDarkTextDimmed: lightgrey,
      
    error: red, // #F44336
    errorText: white,
    errorTextDimmed: mediumgrey,
    errorLight: pink, // #E91E63
    errorLightText: black,
    errorLightTextDimmed: mediumgrey,
    errorDark: crimson, // #B22222
    errorDarkText: white,
    errorDarkTextDimmed: lightgrey,
      
    info: skyblue, // #87CEEB
    infoText: black,
    infoTextDimmed: mediumgrey,
    infoLight: cyan, // #00BCD4
    infoLightText: black,
    infoLightTextDimmed: mediumgrey,
    infoDark: blue, // #03A9F4
    infoDarkText: white,
      
    background: ffnNeutral,
    backgroundText: black,
    backgroundTextDimmed: mediumgrey,
    backgroundLight: mediumgrey,
    backgroundLightText: white,
    backgroundLightTextDimmed: lightgrey,
    backgroundDark: black,
    backgroundDarkText: lightgrey,
    backgroundDarkTextDimmed: mediumgrey
};
      