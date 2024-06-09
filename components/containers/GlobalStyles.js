import useColor from "../../hooks/useColor";

const GlobalStyles = () => {;
    const colors = useColor();

  return (
    <>
        <style jsx global>{`
                html, body { 
                  background: ${colors.background}
                }
            `}
        </style>
    </>
  )
};

export default GlobalStyles