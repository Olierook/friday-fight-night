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
                    font-family: "Inter", sans-serif;
                    font-optical-sizing: auto;
                    font-weight: 400;
                    font-style: normal;
                }
                .germania {
                    font-family: "Germania One", system-ui;
                    font-weight: 400;
                    font-style: normal;
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