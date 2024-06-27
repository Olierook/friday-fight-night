import useColor from "../../hooks/color/useColor";


const GlobalStyles = ({ children }) => {
    const colors = useColor();

    return (
        <>
            {children}
            <style jsx global>{`
                html, body { 
                    background: ${colors.background};
                    height: 100%;
                    margin: 0;
                    font-family: "AvenirText";

                }
                .germania {
                    font-family: "Germania One", system-ui;
                    font-weight: 400;
                    font-style: normal;
                }

                .avenir {
                    font-family: "Avenir";
                }

                .hardway {
                    font-family: "HardWay";
                }

                .ffn {
                    font-family: "FFN";
                }

                .haet {
                    font-family: "Haettenscheiller";
                }


                @font-face {
                    font-family: "Avenir";
                    src: url("/fonts/avenir/AvenirNextCondensed-HeavyItalic-10.ttf") format('truetype');
                }
                @font-face {
                    font-family: "AvenirText";
                    src: url("/fonts/avenir/AvenirNextCondensed-DemiBold-03.ttf") format('truetype');
                }

                @font-face {
                    font-family: "FFN";
                    src: url("/fonts/ffn.ttf") format('truetype');
                }

                @font-face {
                    font-family: "HardWay";
                    src: url("/fonts/thehardway.ttf") format('truetype');
                }

                @font-face {
                    font-family: "Haettenscheiller";
                    src: url("/fonts/Haettenschweiler-Regular.ttf") format('truetype');
                }

                @keyframes sizeMorph {
                    from {
                        background-size: 100% 100%;
                    }     
                    25% {
                        background-size: 150% 200%;
                    }
                    
                    50% {
                        background-size: 200% 100%;
                    }
                                  
                    75% {
                        background-size: 150% 200%;
                    }
                    
                    to {
                        background-size: 100% 100%;
                    }
                }


            `}
            </style>
        </>
    );
};

export default GlobalStyles;