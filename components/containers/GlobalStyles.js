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
                }
            `}
            </style>
        </>
    );
};

export default GlobalStyles;