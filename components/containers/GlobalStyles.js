import useColor from "../../hooks/useColor";

const GlobalStyles = ({children}) => {
    const colors = useColor();

    return (
        <>
            {children}
            <style jsx global>{`
                html, body { 
                  background: ${colors.background}
                }
            `}
            </style>
        </>
    );
};

export default GlobalStyles;