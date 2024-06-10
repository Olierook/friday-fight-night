import useColor from "../../hooks/useColor";

const GlobalStyles = ({children}) => {
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
            `}
            </style>
        </>
    );
};

export default GlobalStyles;